import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import RatingsReviews from "./pages/RatingsReviews";
import Sales from "./pages/Sales"; 
import RefundDetails from "./pages/RefundDetails";
import ActiveOrders from "./pages/ActiveOrders";
import ActiveOrderDetails from "./pages/ActiveOrderDetails";
import Invoices from "./pages/Invoices";
import Orders from "./pages/Orders";
import Promotions from "./pages/Promotions";
import "./assets/custom.css";  
import "./styles/dashboard.css";
import "./styles/ratingsreviews.css";
import "./styles/sales.css";
import "./styles/refundDetails.css";
import "./styles/ActiveOrderDetails.css"

import Users from "./pages/Users";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/ratings-reviews" element={<RatingsReviews />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/refunds/:orderId" element={<RefundDetails />} />
          <Route path="/active-orders" element={<ActiveOrders />} />
          <Route path="/active-orders/:orderId" element={<ActiveOrderDetails />} />
          <Route path="/users" element={<Users />} /> 
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;