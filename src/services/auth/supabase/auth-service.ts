import { supabase } from '@/services/supabase/config';
import { RateLimitService } from '@/services/rate-limit/rate-limit.service';
import type { AuthService, AuthUser, AuthCredentials, AuthError } from '../types';
import { getRoleForEmail } from '@/features/auth/types/roles';

export class SupabaseAuthService implements AuthService {
  private rateLimiter: RateLimitService;

  constructor() {
    this.rateLimiter = new RateLimitService({
      maxAttempts: 5,
      windowMs: 30 * 60 * 1000, // 30 minutes
      key: 'auth:login'
    });
  }

  async signIn({ email, password }: AuthCredentials): Promise<AuthUser> {
    const isLimited = await this.rateLimiter.checkLimit('auth:login');
    
    if (isLimited) {
      throw new Error('Too many login attempts. Please try again later.');
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        await this.rateLimiter.logAttempt('auth:login', true);
        throw this.handleError(error);
      }

      await this.rateLimiter.logAttempt('auth:login', false);
      return this.updateUserRole(data.user, email);
    } catch (error) {
      await this.rateLimiter.logAttempt('auth:login', true);
      throw error;
    }
  }

  async signInWithGithub(): Promise<void> {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });

    if (error) throw this.handleError(error);
  }

  async signInWithGoogle(): Promise<void> {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });

    if (error) throw this.handleError(error);
  }

  async signUp({ email, password }: AuthCredentials): Promise<AuthUser> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw this.handleError(error);
    return this.updateUserRole(data.user, email);
  }

  private async updateUserRole(user: AuthUser, email: string): Promise<AuthUser> {
    const role = getRoleForEmail(email, {
      adminEmail: import.meta.env.VITE_ADMIN_EMAIL || ''
    });

    await supabase.auth.updateUser({
      data: { role }
    });

    return {
      ...user,
      user_metadata: {
        ...user?.user_metadata,
        role
      }
    };
  }

  private handleError(error: AuthError): Error {
    const errorMessages: Record<string, string> = {
      'Invalid login credentials': 'Invalid email or password',
      'User already registered': 'An account already exists with this email',
      'Signup requires a valid password': 'Password should be at least 6 characters',
      'Invalid email': 'Please enter a valid email address',
    };

    return new Error(errorMessages[error.message] || error.message);
  }

  // ... rest of the existing methods
}
