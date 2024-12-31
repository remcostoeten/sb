import { HelpDropdown } from "./help-dropdown"
import { NotificationsDropdown } from "./notifications-dropdown"
import { TooltipProvider } from "@/components/ui/tooltip"

export const TopBarIcons = () => {
  return (
    <div className="flex items-center gap-2">
      <TooltipProvider>
        <HelpDropdown />
        <NotificationsDropdown />
      </TooltipProvider>
    </div>
  )
}