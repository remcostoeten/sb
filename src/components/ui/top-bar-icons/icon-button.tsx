import * as React from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LucideIcon } from "lucide-react";

interface IconButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  icon: LucideIcon;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, ...props }, ref) => (
    <DropdownMenuTrigger asChild>
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-card-description hover:text-card-text"
        {...props}
      >
        <Icon className="h-5 w-5" />
      </Button>
    </DropdownMenuTrigger>
  )
);

IconButton.displayName = "IconButton";