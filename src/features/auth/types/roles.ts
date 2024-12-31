export type UserRole = 'admin' | 'user';

export interface RoleConfig {
  adminEmail: string;
}

export const getRoleForEmail = (email: string, config: RoleConfig): UserRole => {
  return email.toLowerCase() === config.adminEmail.toLowerCase() ? 'admin' : 'user';
};