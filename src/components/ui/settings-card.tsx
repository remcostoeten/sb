import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { cn } from "@/lib/utils"

interface SettingsCardProps {
  title: string
  description?: string
  className?: string
  children: React.ReactNode
  action?: React.ReactNode
}

export const SettingsCard = ({
  title,
  description,
  className,
  children,
  action
}: SettingsCardProps) => {
  return (
    <Card className={cn("bg-[rgb(31,31,31)] border-[rgb(46,46,46)] shadow-lg rounded-lg", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="text-[rgb(250,250,250)] text-xl font-semibold">{title}</CardTitle>
          {description && (
            <CardDescription className="text-[rgb(160,160,160)] mt-1">
              {description}
            </CardDescription>
          )}
        </div>
        {action && (
          <div className="ml-4">
            {action}
          </div>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}