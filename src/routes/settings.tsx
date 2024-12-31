import { createFileRoute } from '@tanstack/react-router';
import { ProtectedRoute } from '@/features/auth/components/protected-route';
import Settings from '@/pages/Settings';

export const Route = createFileRoute('/_layout/settings')({
  component: () => (
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  )
});