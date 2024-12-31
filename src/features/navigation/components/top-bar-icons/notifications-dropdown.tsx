import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Bell } from "lucide-react";
import { DropdownButton } from "./dropdown-button";

export const NotificationsDropdown = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <DropdownMenu>
          <DropdownButton icon={Bell} />
          <DropdownMenuContent align="end" className="w-80">
            <div className="flex items-center justify-between px-4 py-2 border-b border-[rgb(46,46,46)]">
              <h2 className="font-medium text-white">Notifications</h2>
              <div className="flex gap-4 text-sm">
                <button className="text-gray-400 hover:text-white transition-colors">
                  Inbox
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Archived
                </button>
              </div>
            </div>
            <div className="py-8 text-center text-sm">
              <div className="mb-2 text-gray-400">All caught up</div>
              <div className="text-gray-500">
                You will be notified here for any notices on your organizations and
                projects
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </TooltipTrigger>
      <TooltipContent>Notifications</TooltipContent>
    </Tooltip>
  );
};