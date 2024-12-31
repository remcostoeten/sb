import { ReactNode } from 'react';

export interface SettingsCardProps {
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
  action?: ReactNode;
}