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
    <div className="overflow-clip h-[100dvh] flex flex-col bg-white">
     
      <Navbar />
      <div className={` h-[calc(100dvh-9.75rem)] md:h-[calc(100dvh-7.5rem)] relative flex flex-grow`}>
        <Sidebar />
        <div
          className={`dashboard-container overflow-auto overflow-x-hidden panel-scrollbar flex-grow h-[calc(100dvh-9.75rem)] md:h-[calc(100dvh-5.1rem)] md:rounded-tl-[20px] md:border-t-2 border-l-2  duration-300 border-gray-200 bg-[#F9F9F9]`}
        >
          <Outlet />
       
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout