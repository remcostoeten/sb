export interface WorkspaceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface WorkspaceModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}