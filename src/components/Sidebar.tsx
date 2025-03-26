
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaStar, FaShoppingCart, FaClipboardList, FaUsers, FaFileInvoice, FaTags, FaBars } from "react-icons/fa";
import "../styles/sidebar.css";

// Define props interface
interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <aside className={`main-sidebar sidebar-dark-primary elevation-4 ${isCollapsed ? "collapsed" : ""}`}>
      {/* Sidebar Toggle Button */}
      <button className="menu-toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FaTachometerAlt className="nav-icon" />
                {!isCollapsed && <p>Home</p>}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ratings-reviews" className="nav-link">
                <FaStar className="nav-icon" />
                {!isCollapsed && <p>Ratings & Reviews</p>}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sales" className="nav-link">
                <FaShoppingCart className="nav-icon" />
                {!isCollapsed && <p>Sales</p>}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/active-orders" className="nav-link">
                <FaClipboardList className="nav-icon" />
                {!isCollapsed && <p>Active Orders</p>}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">
                <FaUsers className="nav-icon" />
                {!isCollapsed && <p>Users</p>}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/invoices" className="nav-link">
                <FaFileInvoice className="nav-icon" />
                {!isCollapsed && <p>Invoices</p>}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/promotions" className="nav-link">
                <FaTags className="nav-icon" />
                {!isCollapsed && <p>Promotions</p>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
