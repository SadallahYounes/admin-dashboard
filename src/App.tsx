import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import RatingsReviews from "./pages/RatingsReviews";
import Sales from "./pages/Sales"; 
import RefundDetails from "./pages/RefundDetails";
import ActiveOrders from "./pages/ActiveOrders";
import ActiveOrderDetails from "./pages/ActiveOrderDetails";
import Orders from "./pages/Orders";
import "./assets/custom.css";  
import "./pages/dashboard.css";
import "./pages/ratingsreviews.css";
import "./pages/sales.css";
import "./pages/refundDetails.css";
import "./pages/ActiveOrderDetails.css"
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
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;