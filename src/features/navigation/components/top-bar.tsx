import { WorkspaceSwitcher } from "./workspace-switcher";
import { TopBarIcons } from "./top-bar-icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export function TopBar() {
  return (
    <div className="h-14 border-b border-[rgb(46,46,46)] bg-[#1C1C1C] flex items-center px-4 justify-between fixed top-0 right-0 left-16 z-40">
      <div className="flex items-center gap-4">
        <WorkspaceSwitcher />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-white hover:text-white/90">
                Project
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="sm"
          className="text-white border-[rgb(46,46,46)] hover:bg-[#2A2A2A] hover:text-white text-xs px-3 py-1 h-7"
        >
          Feedback
        </Button>
        <TopBarIcons />
      </div>
    </div>
  );
}