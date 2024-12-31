import { Copy } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { SettingsCard } from "@/components/ui/settings-card"
import { ActionButton, DestructiveButton, PrimaryButton } from "@/components/ui/button-variants"
import { TopBar } from "@/components/ui/top-bar"
import { PageLayout } from "@/components/layout/page-layout"
import { SettingsSidebar } from "@/components/layout/settings-sidebar"
import { useResizable } from "@/components/layout/page-layout/use-resizable"

const Settings = () => {
  const { width } = useResizable()
  const [projectData, setProjectData] = useState({
    name: "sb1-frtfctem",
    id: "nlmghadzcyvpwfhgcqoh"
  })

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectData(prev => ({ ...prev, name: e.target.value }))
  }

  return (
    <>
      <TopBar sidebarWidth={width} />
      <PageLayout sidebar={<SettingsSidebar />}>
        <div className="space-y-6 p-6 mt-14">
          <h1 className="text-3xl font-bold text-card-text mb-8">Project Settings</h1>
          
          <SettingsCard 
            title="General settings"
            action={
              <div className="flex gap-2">
                <ActionButton variant="outline">Cancel</ActionButton>
                <PrimaryButton>Save</PrimaryButton>
              </div>
            }
          >
            <div className="space-y-4">
              <div>
                <label className="text-sm text-card-description block mb-2">Project name</label>
                <Input 
                  value={projectData.name}
                  onChange={handleNameChange}
                  className="bg-card-bg border-card-border text-card-text"
                />
              </div>
              <div>
                <label className="text-sm text-card-description block mb-2">Project ID</label>
                <div className="flex gap-2">
                  <Input 
                    value={projectData.id}
                    readOnly
                    className="bg-card-bg border-card-border text-card-text"
                  />
                  <ActionButton>
                    <Copy className="w-4 h-4" />
                    Copy
                  </ActionButton>
                </div>
              </div>
            </div>
          </SettingsCard>
        </div>
      </PageLayout>
    </>
  )
}

export default Settings