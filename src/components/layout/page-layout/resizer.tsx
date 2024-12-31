import { cn } from "@/lib/utils";

interface ResizerProps {
  onMouseDown: (e: React.MouseEvent) => void;
  isResizing: boolean;
}

export const Resizer = ({ onMouseDown, isResizing }: ResizerProps) => {
  return (
    <div
      onMouseDown={onMouseDown}
      className={cn(
        "absolute right-0 top-0 h-full w-[2px] cursor-col-resize group",
        "after:absolute after:right-0 after:top-0 after:h-full after:w-[2px]",
        "after:opacity-0 after:bg-primary/30 after:transition-opacity",
        "hover:after:opacity-100",
        isResizing && "after:opacity-100"
      )}
    />
  );
};