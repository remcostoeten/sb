import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  isExpanded: boolean;
}

export const SidebarItem = ({ icon: Icon, label, path, isExpanded }: SidebarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={cn(
        'flex items-center px-3 py-2 rounded-md transition-colors relative group',
        isActive ? 'bg-[#313131] text-white' : 'text-gray-400 hover:bg-[#2A2A2A] hover:text-white'
      )}
    >
      <Icon size={20} />
      <motion.span
        initial={false}
        animate={{ 
          opacity: isExpanded ? 1 : 0,
          width: isExpanded ? 'auto' : 0,
          marginLeft: isExpanded ? '12px' : 0
        }}
        className="whitespace-nowrap overflow-hidden"
      >
        {label}
      </motion.span>
      {!isExpanded && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="fixed left-16 bg-gray-900 text-white px-2 py-1 rounded ml-2 whitespace-nowrap z-50"
        >
          {label}
        </motion.div>
      )}
    </Link>
  );
};
