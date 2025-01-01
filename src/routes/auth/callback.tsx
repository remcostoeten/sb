'use client';

import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { supabase } from '@/services/supabase/config';
import { useNavigate } from '@tanstack/react-router';
import type { AuthChangeEvent } from '@supabase/supabase-js';

function CallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: AuthChangeEvent) => {
      if (event === 'SIGNED_IN') {
        navigate({ to: '/_layout' });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
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

export const Route = createFileRoute('/_layout/auth/callback')({
  component: CallbackPage
}); 
