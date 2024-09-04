import SideNav from '@/app/ui/dashboard/sidenav';
import Header from '@/app/ui/dashboard/header';
import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
import { Labrada } from 'next/font/google';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className=" bg-gray-200 w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="bg-gray-50 text-black flex-grow p-3 md:overflow-y-auto md:p-5">
          <Breadcrumbs />
          {children}
        </div>
      </div>
    </>
  );
}
