import * as React from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import type { IconButtonProps } from "./types";

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, className, ...props }, ref) => (
    <DropdownMenuTrigger>
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