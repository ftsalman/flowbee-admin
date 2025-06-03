import React, { useEffect, useState } from 'react'
import Navbar from '../Components/dashboard-layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/dashboard-layouts/Sidebar';

const DashboardLayout = () => {


      const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Detect small screen on initial load
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize); // Watch window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const handleToggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    
  return (
     <div className="flex h-screen overflow-hidden relative">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggle={handleToggleSidebar} />

      {/* Overlay on small screens */}
      {isSidebarOpen && window.innerWidth < 468 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={handleToggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col z-20">
        {/* Navbar */}
        <Navbar  />

        {/* Page Content */}
        <div className="flex-1 overflow-auto bg-[#F9F9F9] p-4 rounded-tl-3xl shadow-inner">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout