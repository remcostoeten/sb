import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/providers/auth-provider';
import { toast } from '@/hooks/use-toast';

interface AuthFormProps {
  mode: 'sign-in' | 'register';
}

export function AuthForm({ mode }: AuthFormProps) {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (mode === 'sign-in') {
        await signIn(formData.email, formData.password);
        toast({
          title: "Success",
          description: "Successfully signed in!",
        });
        navigate({ to: '/' });
      } else {
        await signUp(formData.email, formData.password);
        toast({
          title: "Success",
          description: "Account created successfully!",
        });
        navigate({ to: '/login' });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-8 px-4">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter text-card-text">
          {mode === 'sign-in' ? 'Welcome back' : 'Create an account'}
        </h1>
        <p className="text-sm text-card-description">
          {mode === 'sign-in' 
            ? "Enter your email to sign in to your account" 
            : "Enter your email below to create your account"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="bg-card-bg border-card-border text-card-text"
            required
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            className="bg-card-bg border-card-border text-card-text"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-black"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-b-transparent" />
              {mode === 'sign-in' ? 'Signing in...' : 'Creating account...'}
            </div>
          ) : (
            mode === 'sign-in' ? 'Sign in' : 'Create account'
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-card-description">
        {mode === 'sign-in' ? (
          <>
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:underline">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  );
}