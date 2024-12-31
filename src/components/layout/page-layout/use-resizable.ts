import { useState, useCallback } from 'react';

const MIN_WIDTH = 200;
const MAX_WIDTH = 400;
const DEFAULT_WIDTH = 240;
const SNAP_THRESHOLD = 220; // Width at which sidebar will snap closed

export const useResizable = () => {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [isResizing, setIsResizing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    const startX = e.clientX;
    const startWidth = width;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      
      const diff = e.clientX - startX;
      const newWidth = startWidth + diff - 64; // Account for main sidebar

      // Handle snapping
      if (newWidth < SNAP_THRESHOLD) {
        setIsExpanded(false);
        setWidth(0);
        return;
      }

      if (newWidth >= MIN_WIDTH && newWidth <= MAX_WIDTH) {
        setWidth(newWidth);
        setIsExpanded(true);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [width, isResizing]);

  const toggleSidebar = useCallback(() => {
    setIsExpanded(prev => !prev);
    setWidth(prev => prev === 0 ? DEFAULT_WIDTH : 0);
  }, []);

  return {
    width: isExpanded ? width : 0,
    isResizing,
    isExpanded,
    handleMouseDown,
    toggleSidebar
  };
};