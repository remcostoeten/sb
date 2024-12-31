import { Button } from "./button"
import { cn } from "@/lib/utils"
import { type ButtonProps } from "./button"

export const ActionButton = ({ className, ...props }: ButtonProps) => (
  <Button
    variant="outline"
    className={cn(
      "bg-[rgb(31,31,31)] text-[rgb(250,250,250)] hover:bg-[rgb(46,46,46)] border-[rgb(46,46,46)]",
      className
    )}
    {...props}
  />
)

export const DestructiveButton = ({ className, ...props }: ButtonProps) => (
  <Button
    variant="destructive"
    className={cn(
      "bg-[rgb(61,30,30)] text-red-400 hover:bg-[rgb(74,32,32)] border border-red-900",
      className
    )}
    {...props}
  />
)

export const PrimaryButton = ({ className, ...props }: ButtonProps) => (
  <Button
    variant="default"
    className={cn(
      "bg-[rgb(62,207,142)] hover:bg-[rgb(62,207,142)]/90 text-black",
      className
    )}
    {...props}
  />
)