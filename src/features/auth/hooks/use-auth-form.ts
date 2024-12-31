import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import type { AuthFormData } from '../types';
import { useNavigate } from '@tanstack/react-router';
export const useAuthForm = (mode: 'login' | 'register') => {
  const navigate = useNavigate();
  const { signIn, signUp, signInWithGithub, error } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: AuthFormData) => {
    try {
      setIsLoading(true);
      if (mode === 'login') {
        await signIn(data.email, data.password);
      } else {
        await signUp(data.email, data.password);
      }
      navigate({ to: '/_layout' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async (provider: 'github') => {
    try {
      setIsLoading(true);
      switch (provider) {
        case 'github':
          await signInWithGithub();
          break;
      }
      navigate({ to: '/_layout' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onSubmit,
    handleSocialAuth,
    isLoading,
    error
  };
};
