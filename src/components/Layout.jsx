import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout({ handleLogout }) {

  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className={"flex flex-col w-full pl-60"}>
        {/* Navbar */}
        <Navbar handleLogout={handleLogout} />

        {/* Page content */}
        <main className="p-6">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Layout