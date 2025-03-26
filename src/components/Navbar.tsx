import { useState } from "react";
import { FaBell, FaMoon, FaSun, FaUserCircle, FaBars } from "react-icons/fa";
import "../styles/navbar.css";

interface NavbarProps {
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ setIsCollapsed }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Sidebar Toggle Button */}
      <button 
        className="nav-link menu-toggle" 
        onClick={() => setIsCollapsed(prev => !prev)}
        aria-label="Toggle Sidebar"
      >
        <FaBars />
      </button>

      {/* Right Navbar Items */}
      <ul className="navbar-nav ml-auto">
        {/* Dark Mode Toggle */}
        <li className="nav-item">
          <button className="nav-link" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>

        {/* Notifications */}
        <li className="nav-item dropdown notification-bell">
          <button
            className="nav-link"
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Toggle Notifications"
          >
            <FaBell className="bell-icon" />
            <span className="badge badge-danger navbar-badge">3</span>
          </button>
          {showNotifications && (
            <div className="dropdown-menu dropdown-menu-right">
              <span className="dropdown-header">3 Notifications</span>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">New order received</a>
              <a href="#" className="dropdown-item">Product review added</a>
            </div>
          )}
        </li>

        {/* Profile Dropdown */}
        <li className="nav-item dropdown">
          <button
            className="nav-link"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            aria-label="Toggle Profile Dropdown"
          >
            <FaUserCircle />
          </button>
          {showProfileDropdown && (
            <div className="dropdown-menu dropdown-menu-right">
              <a href="#" className="dropdown-item">Profile</a>
              <a href="#" className="dropdown-item">Settings</a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">Logout</a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
