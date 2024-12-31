import { createFileRoute } from '@tanstack/react-router';
import { AuthCallback } from './auth-callback-component';

export const Route = createFileRoute('/_layout/auth/callback')({
  component: AuthCallback,
  beforeLoad: ({ context, location, params }) => {
    return {
      // Add any necessary context or validation here
    }
  }
});
