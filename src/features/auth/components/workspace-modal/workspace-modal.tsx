import * as React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { PrimaryButton } from '@/components/ui/button-variants';
import { useWorkspaceStore } from '@/features/navigation/stores/use-workspace-store';
import { useWorkspaceModal } from './use-workspace-modal';

export const WorkspaceModal = () => {
  const { isOpen, onClose } = useWorkspaceModal();
  const [workspaceName, setWorkspaceName] = React.useState('');
  const { setCurrentWorkspace } = useWorkspaceStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (workspaceName.trim()) {
      setCurrentWorkspace(workspaceName);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card-bg border-card-border">
        <DialogHeader>
          <DialogTitle className="text-card-text">Create your workspace</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="workspace-name" className="text-sm text-card-description">
              Workspace name
            </label>
            <Input
              id="workspace-name"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="My Workspace"
              className="bg-card-bg border-card-border text-card-text"
              required
            />
          </div>
          <PrimaryButton type="submit" className="w-full">
            Create Workspace
          </PrimaryButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};