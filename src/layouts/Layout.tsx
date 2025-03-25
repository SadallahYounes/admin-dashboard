import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../components/sidebar.css"; // Sidebar styles
import "../components/navbar.css"; // Navbar styles

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <div className={`layout ${isSidebarOpen ? "" : "collapsed"}`}>
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="main-content">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
