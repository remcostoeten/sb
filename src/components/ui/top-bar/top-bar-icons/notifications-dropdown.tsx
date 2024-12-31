import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Bell } from "lucide-react"
import { IconButton } from "./icon-button"

export const NotificationsDropdown = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <DropdownMenu>
          <IconButton icon={Bell} />
          <DropdownMenuContent align="end" className="w-80">
            <div className="flex items-center justify-between px-4 py-2 border-b border-card-border">
              <h2 className="font-medium text-card-text">Notifications</h2>
              <div className="flex gap-4 text-sm">
                <button className="text-card-description hover:text-card-text transition-colors">
                  Inbox
                </button>
                <button className="text-card-description hover:text-card-text transition-colors">
                  Archived
                </button>
              </div>
            </div>
            <div className="py-8 text-center text-sm">
              <div className="mb-2 text-card-description">All caught up</div>
              <div className="text-card-description/70">
                You will be notified here for any notices on your organizations and projects
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </TooltipTrigger>
      <TooltipContent>Notifications</TooltipContent>
    </Tooltip>
  )
}