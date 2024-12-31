import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signOut as firebaseSignOut,
  type User as FirebaseUser
} from 'firebase/auth';
import { auth } from './config';
import type { AuthService, AuthUser, AuthCredentials, AuthError } from '../types';

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const mapFirebaseUser = (user: FirebaseUser): AuthUser => ({
  id: user.uid,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
  provider: user.providerData[0]?.providerId
});

export class FirebaseAuthService implements AuthService {
  async signIn({ email, password }: AuthCredentials): Promise<AuthUser> {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return mapFirebaseUser(user);
    } catch (error) {
      throw this.handleError(error as AuthError);
    }
  }

  async signInWithGithub(): Promise<AuthUser> {
    try {
      const { user } = await signInWithPopup(auth, githubProvider);
      return mapFirebaseUser(user);
    } catch (error) {
      throw this.handleError(error as AuthError);
    }
  }

  async signInWithGoogle(): Promise<AuthUser> {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      return mapFirebaseUser(user);
    } catch (error) {
      throw this.handleError(error as AuthError);
    }
  }

  async signUp({ email, password }: AuthCredentials): Promise<AuthUser> {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      return mapFirebaseUser(user);
    } catch (error) {
      throw this.handleError(error as AuthError);
    }
  }

  async signOut(): Promise<void> {
    await firebaseSignOut(auth);
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    return new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe();
        resolve(user ? mapFirebaseUser(user) : null);
      });
    });
  }

  onAuthStateChanged(callback: (user: AuthUser | null) => void): () => void {
    return onFirebaseAuthStateChanged(auth, (user) => {
      callback(user ? mapFirebaseUser(user) : null);
    });
  }

  private handleError(error: AuthError): Error {
    // Map Firebase errors to user-friendly messages
    const errorMessages: Record<string, string> = {
      'auth/user-not-found': 'No account exists with this email',
      'auth/wrong-password': 'Invalid password',
      'auth/email-already-in-use': 'An account already exists with this email',
      'auth/weak-password': 'Password should be at least 6 characters',
      'auth/invalid-email': 'Please enter a valid email address',
    };

    return new Error(errorMessages[error.code] || error.message);
  }
}