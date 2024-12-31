import { create } from 'zustand';
import type { WorkspaceModalStore } from './types';

export const useWorkspaceModal = create<WorkspaceModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));