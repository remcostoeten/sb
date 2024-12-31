import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { toast } from '@/hooks/use-toast';
import { WorkspaceModal, useWorkspaceModal } from './workspace-modal';
import { useNavigate } from '@tanstack/react-router';

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function AuthForm({ mode }: { mode: 'sign-in' | 'register' }) {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { onOpen } = useWorkspaceModal();
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
        navigate({ to: '/_layout' });
      } else {
        await signUp(formData.email, formData.password);
        toast({
          title: "Success",
          description: "Account created successfully!",
        });
        onOpen();
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

  // ... rest of the component code ...

  return (
    <>
      {/* Existing form JSX */}
      <WorkspaceModal />
    </>
  );
}
