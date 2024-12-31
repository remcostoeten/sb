import { cn } from "@/lib/utils";

const sections = [
  {
    title: "PROJECT SETTINGS",
    items: [
      { label: "General", href: "/settings" },
      { label: "Compute and Disk", href: "/settings/compute" },
      { label: "Infrastructure", href: "/settings/infrastructure" },
      { label: "Integrations", href: "/settings/integrations" },
      { label: "Add Ons", href: "/settings/addons" },
      { label: "Vault", href: "/settings/vault", badge: "Alpha" },
    ],
  },
  {
    title: "CONFIGURATION",
    items: [
      { label: "Database", href: "/settings/database" },
      { label: "API", href: "/settings/api" },
      { label: "Authentication", href: "/settings/auth" },
      { label: "Storage", href: "/settings/storage" },
      { label: "Edge Functions", href: "/settings/edge-functions" },
      { label: "Log Drains", href: "/settings/logs" },
    ],
  },
  {
    title: "BILLING",
    items: [
      { label: "Subscription", href: "/settings/subscription" },
      { label: "Usage", href: "/settings/usage" },
    ],
  },
];

export const SettingsSidebar = () => {
  return (
    <div className="p-4">
      {sections.map((section) => (
        <div key={section.title} className="mb-8">
          <h3 className="text-xs font-medium text-card-description mb-2">
            {section.title}
          </h3>
          <nav>
            {section.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between py-1 px-2 rounded-md text-[15px]",
                  "text-card-description hover:text-card-text hover:bg-card-border transition-colors",
                  item.href === "/settings" && "text-card-text bg-card-border"
                )}
              >
                {item.label}
                {item.badge && (
                  <span className="text-xs bg-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
      ))}
    </div>
  );
};