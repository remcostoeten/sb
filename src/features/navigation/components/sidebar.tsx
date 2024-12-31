import { motion } from 'framer-motion';
import { navigationItems, bottomNavigationItems } from '../data/navigation';
import { SidebarItem } from './sidebar-item';
import { UserMenu } from './user-menu';
import { useSidebarStore } from '../stores/use-sidebar-store';
import { themeConfig } from '@/config/theme';

export const Sidebar = () => {
  const { isExpanded, setIsExpanded } = useSidebarStore();

  return (
    <motion.div
      initial={false}
      animate={{ 
        width: isExpanded ? 240 : 64
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="fixed h-screen bg-[#1C1C1C] border-r border-[rgb(46,46,46)] flex flex-col py-4 transition-all duration-200 z-50"
    >
      <div className="px-3 mb-8">
        <div className="h-8 w-8 bg-[#3ECF8E] rounded flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12.5C5 11.1193 6.11929 10 7.5 10H9V14H7.5C6.11929 14 5 12.8807 5 11.5V12.5ZM19 11.5C19 12.8807 17.8807 14 16.5 14H15V10H16.5C17.8807 10 19 11.1193 19 12.5V11.5ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z"
              fill="currentColor"
              className="text-black"
            />
          </svg>
        </div>
      </div>

      <div className="flex-1 space-y-1 px-2">
        {navigationItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            path={item.path}
            isExpanded={isExpanded}
          />
        ))}
      </div>

      <div className="mt-4 space-y-1 px-2">
        {bottomNavigationItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            path={item.path}
            isExpanded={isExpanded}
          />
        ))}
      </div>

      <UserMenu isExpanded={isExpanded} />
    </motion.div>
  );
};