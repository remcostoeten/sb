import { motion } from 'framer-motion';
import { PageLayoutProps } from './types';
import { useResizable } from './use-resizable';
import { Resizer } from './resizer';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PageLayout = ({ children, sidebar }: PageLayoutProps) => {
  const { width, isResizing, isExpanded, handleMouseDown, toggleSidebar } = useResizable();

  return (
    <div className="flex min-h-screen">
      {sidebar && (
        <motion.aside
          initial={false}
          animate={{ width }}
          className="fixed top-14 left-16 h-[calc(100vh-3.5rem)] border-r border-card-border bg-card-bg overflow-hidden"
          style={{ width }}
        >
          <div className="relative h-full">
            <div className="overflow-y-auto h-full">
              {sidebar}
            </div>
            <Resizer onMouseDown={handleMouseDown} isResizing={isResizing} />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={toggleSidebar}
            >
              <ChevronLeft className={`h-4 w-4 transition-transform ${!isExpanded ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </motion.aside>
      )}
      
      <main 
        className="flex-1 pl-16 transition-[margin]"
        style={{ marginLeft: width }}
      >
        {children}
      </main>
    </div>
  );
};