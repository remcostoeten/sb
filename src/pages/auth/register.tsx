import { AuthForm } from '@/features/auth/components/auth-form';

export function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-1 flex items-center justify-center">
        <AuthForm mode="register" />
      </main>
    </div>
  );
}