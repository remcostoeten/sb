import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LucideIcon } from "lucide-react"

interface IconButtonProps {
  icon: LucideIcon
}

export const IconButton = ({ icon: Icon }: IconButtonProps) => (
  <DropdownMenuTrigger asChild>
    <Button 
      variant="ghost" 
      size="icon" 
      className="h-8 w-8 text-card-description hover:text-card-text"
    >
      <Icon className="h-5 w-5" />
    </Button>
  </DropdownMenuTrigger>
)