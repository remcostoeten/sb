import { forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface SocialAuthButtonProps extends ButtonProps {
  icon: LucideIcon;
  provider: string;
}

export const SocialAuthButton = forwardRef<HTMLButtonElement, SocialAuthButtonProps>(
  ({ icon: Icon, provider, ...props }, ref) => (
    <Button
      ref={ref}
      variant="outline"
      className="w-full"
      {...props}
    >
      <Icon className="mr-2 h-4 w-4" />
      Continue with {provider}
    </Button>
  )
);