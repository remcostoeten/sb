import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWorkspaceStore } from "@/features/navigation/stores/use-workspace-store";
import { useState } from "react";

export const WorkspaceSwitcher = () => {
  const { currentWorkspace, setCurrentWorkspace } = useWorkspaceStore();
  const [searchQuery, setSearchQuery] = useState('');

  const handleCreateWorkspace = () => {
    const name = window.prompt('Enter workspace name:');
    if (name?.trim()) {
      setCurrentWorkspace(name);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#2A2A2A] transition-colors">
        <span className="text-sm text-white">{currentWorkspace}</span>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <div className="px-2 py-1.5">
          <input
            type="text"
            placeholder="Search workspace..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-2 py-1 text-sm bg-transparent border border-gray-800 rounded focus:outline-none focus:border-gray-700"
          />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {currentWorkspace}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleCreateWorkspace}>
          <span className="flex items-center gap-2">
            <span className="text-primary">+</span>
            New workspace
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};