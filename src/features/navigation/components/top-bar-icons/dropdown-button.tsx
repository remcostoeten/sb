import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { TooltipTrigger } from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";
import * as React from "react";

interface DropdownButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  icon: LucideIcon;
}

export const DropdownButton = React.forwardRef<HTMLButtonElement, DropdownButtonProps>(
  ({ icon: Icon, ...props }, ref) => (
    <DropdownMenuTrigger asChild>
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-gray-400 hover:text-white"
        {...props}
      >
        <Icon className="h-5 w-5" />
      </Button>
    </DropdownMenuTrigger>
  )
);

DropdownButton.displayName = "DropdownButton";