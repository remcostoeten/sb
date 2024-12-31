import { useAuth } from '@/hooks/use-auth';
import { cn } from '@/lib/utils';

interface AdminBadgeProps {
  className?: string;
}

export const AdminBadge = ({ className }: AdminBadgeProps) => {
  const { isAdmin } = useAuth();

  if (!isAdmin) return null;

  return (
    <div 
      className={cn(
        "w-2 h-2 rounded-full bg-amber-400 ring-4 ring-amber-400/10",
        className
      )}
      title="Admin"
    />
  );
};