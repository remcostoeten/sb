import { WorkspaceSwitcher } from "./workspace-switcher"
import { TopBarIcons } from "./top-bar-icons"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"

interface TopBarProps {
  sidebarWidth: number;
}

export const TopBar = ({ sidebarWidth }: TopBarProps) => {
  return (
    <div 
      className="h-14 border-b border-card-border bg-card-bg flex items-center px-4 justify-between fixed top-0 right-0 z-40 transition-[left]"
      style={{ left: `${16 + sidebarWidth}px` }}
    >
      <div className="flex items-center gap-4">
        <WorkspaceSwitcher />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-card-text hover:text-card-text/90">
                Project
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/settings" className="text-card-text hover:text-card-text/90">
                Settings
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="sm"
          className="text-card-text border-card-border hover:bg-card-border hover:text-card-text text-xs px-3 py-1 h-7"
        >
          Feedback
        </Button>
        <TopBarIcons />
      </div>
    </div>
  )
}