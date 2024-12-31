import { TooltipProvider } from "@/components/ui/tooltip";
import { HelpDropdown } from "./help-dropdown";
import { NotificationsDropdown } from "./notifications-dropdown";

export const TopBarIcons = () => {
  return (
    <div className="flex items-center gap-2">
      <TooltipProvider>
        <HelpDropdown />
        <NotificationsDropdown />
      </TooltipProvider>
    </div>
  );
};