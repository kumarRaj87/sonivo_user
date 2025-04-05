import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import MobileSidebar from './sidebar/MobileSidebar';
import { useState } from 'react';

function Layout({ handleLogout }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-primary-200">
      <Sidebar />
      <MobileSidebar
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      <div className="flex flex-col w-full lg:pl-60">
        <Navbar
          handleLogout={handleLogout}
          toggleSidebar={toggleMobileSidebar}
        />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout