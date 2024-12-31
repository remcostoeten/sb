import { create } from 'zustand';
import type { AuthUser } from '@/services/auth';
import { SupabaseAuthService } from '@/services/auth';

interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  error: string | null;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGithub: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const authService = new SupabaseAuthService();

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  error: null,
  isAdmin: false,

  signIn: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      const user = await authService.signIn({ email, password });
      set({ 
        user, 
        isLoading: false,
        isAdmin: user?.user_metadata?.role === 'admin'
      });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  signUp: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      const user = await authService.signUp({ email, password });
      set({ 
        user, 
        isLoading: false,
        isAdmin: user?.user_metadata?.role === 'admin'
      });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  // ... rest of the existing code ...
}));