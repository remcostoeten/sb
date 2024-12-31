export interface AuthUser {
  id: string;
  email?: string | null;
  user_metadata?: {
    avatar_url?: string;
    full_name?: string;
  };
}

export interface AuthError {
  message: string;
  status?: number;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthService {
  signIn: (credentials: AuthCredentials) => Promise<AuthUser>;
  signInWithGithub: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUp: (credentials: AuthCredentials) => Promise<AuthUser>;
  signOut: () => Promise<void>;
  getCurrentUser: () => Promise<AuthUser | null>;
  onAuthStateChange: (callback: (user: AuthUser | null) => void) => () => void;
}