import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useWorkspaceStore } from "@/features/navigation/stores/use-workspace-store"

export const WorkspaceSwitcher = () => {
  const { currentWorkspace } = useWorkspaceStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-card-border transition-colors">
        <span className="text-sm text-card-text">{currentWorkspace}</span>
        <ChevronDown className="h-4 w-4 text-card-description" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <div className="px-2 py-1.5">
          <input
            type="text"
            placeholder="Search organization..."
            className="w-full px-2 py-1 text-sm bg-transparent border border-card-border rounded focus:outline-none focus:border-card-border/90"
          />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-card-text">
          remcostoeten's Org
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="flex items-center gap-2 text-card-text">
            <span className="text-primary">+</span>
            New organization
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}