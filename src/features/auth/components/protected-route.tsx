import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '@/providers/auth-provider';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary" />
      </div>
    );
  }

  if (!user) {
    navigate({ to: '/login' });
    return null;
  }

  return <>{children}</>;
}