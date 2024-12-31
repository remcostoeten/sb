import { Outlet } from '@tanstack/react-router';
import { Sidebar } from '@/features/navigation/components/sidebar';
import { TopBar } from '@/features/navigation/components/top-bar';
import { AsideContainer } from '@/features/navigation/components/page-aside/aside-container';

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-[#1C1C1C]">
      <Sidebar />
      <div className="flex-1 flex flex-col pl-16">
        <TopBar />
        <main className="flex-1 pt-14">
          <Outlet />
        </main>
      </div>
      <AsideContainer />
    </div>
  );
}
