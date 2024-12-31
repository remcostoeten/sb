import { forwardRef } from 'react'
import { Button } from "../button"
import { cn } from "@/lib/utils"
import { type ButtonProps } from "../button"

export const ActionButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button
      ref={ref}
      variant="outline"
      className={cn(
        "bg-card-bg text-card-text hover:bg-card-border border-card-border",
        className
      )}
      {...props}
    />
  )
)
ActionButton.displayName = 'ActionButton'

export const DestructiveButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button
      ref={ref}
      variant="destructive"
      className={cn(
        "bg-[rgb(61,30,30)] text-red-400 hover:bg-[rgb(74,32,32)] border border-red-900",
        className
      )}
      {...props}
    />
  )
)
DestructiveButton.displayName = 'DestructiveButton'

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button
      ref={ref}
      variant="default"
      className={cn(
        "bg-primary hover:bg-primary/90 text-black",
        className
      )}
      {...props}
    />
  )
)
PrimaryButton.displayName = 'PrimaryButton'