import { useEffect } from 'react';
import { supabase } from '@/services/supabase/config';
import { useNavigate } from '@tanstack/react-router';

export function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        navigate({ to: '/_layout' });
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary border-r-2 mb-4 mx-auto" />
        <p className="text-card-text">Completing sign in...</p>
      </div>
    </div>
  );
} 
