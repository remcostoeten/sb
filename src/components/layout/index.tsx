import { Outlet } from '@tanstack/react-router';
import { Sidebar } from '@/features/navigation/components/sidebar';
import { TopBar } from '@/features/navigation/components/top-bar';

export function Layout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col pl-16">
        <TopBar />
        <main className="flex-1 pt-14">
          <Outlet />
        </main>
      </div>
    </div>
  );
}