import { useState } from "react";
import { FaBell, FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Right Navbar Items */}
      <ul className="navbar-nav ml-auto">
        {/* Dark Mode Toggle */}
        <li className="nav-item">
          <button className="nav-link" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>

        {/* Notifications */}
        <li className="nav-item dropdown notification-bell">
              <button
                className="nav-link"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <FaBell className="bell-icon" />
                <span className="badge badge-danger navbar-badge">3</span>
              </button>
              {showNotifications && (
                <div className="dropdown-menu dropdown-menu-right">
                  <span className="dropdown-header">3 Notifications</span>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item">
                    New order received
                  </a>
                  <a href="#" className="dropdown-item">
                    Product review added
                  </a>
                </div>
              )}
           </li>


        {/* Profile Dropdown */}
        <li className="nav-item dropdown">
          <button
            className="nav-link"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            <FaUserCircle />
          </button>
          {showProfileDropdown && (
            <div className="dropdown-menu dropdown-menu-right">
              <a href="#" className="dropdown-item">
                Profile
              </a>
              <a href="#" className="dropdown-item">
                Settings
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                Logout
              </a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
