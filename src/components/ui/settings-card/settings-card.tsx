import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card"
import { cn } from "@/lib/utils"
import { SettingsCardProps } from "./types"

export const SettingsCard = ({
  title,
  description,
  className,
  children,
  action
}: SettingsCardProps) => {
  return (
    <Card className={cn("bg-card-bg border-card-border shadow-lg rounded-lg", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="text-card-text text-xl font-semibold">{title}</CardTitle>
          {description && (
            <CardDescription className="text-card-description mt-1">
              {description}
            </CardDescription>
          )}
        </div>
        {action && <div className="ml-4">{action}</div>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}