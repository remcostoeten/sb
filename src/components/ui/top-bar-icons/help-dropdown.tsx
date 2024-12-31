import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";
import { IconButton } from "./icon-button";

export const HelpDropdown = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <DropdownMenu>
          <IconButton icon={HelpCircle} />
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="text-card-text">Documentation</DropdownMenuItem>
            <DropdownMenuItem className="text-card-text">Support</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TooltipTrigger>
      <TooltipContent>Help & Resources</TooltipContent>
    </Tooltip>
  );
};