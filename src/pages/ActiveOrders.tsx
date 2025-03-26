import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  
import "../styles/ActiveOrders.css";

// Define order type
interface Order {
  id: number;
  customer: string;
  date: string;
  status: "Pending" | "Processing";
  total: string;
}

const ActiveOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Mock API call (Replace this with actual API later)
    const mockOrders: Order[] = [
      { id: 101, customer: "John Doe", date: "2025-03-22", status: "Pending", total: "$120" },
      { id: 102, customer: "Alice Smith", date: "2025-03-21", status: "Processing", total: "$80" },
    ];
    setOrders(mockOrders);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Active Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Order Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>
                <span className={`badge ${order.status === "Pending" ? "bg-warning" : "bg-primary"}`}>
                  {order.status}
                </span>
              </td>
              <td>{order.total}</td>
              <td>
                <Link to={`/active-orders/${order.id}`} className="btn btn-info btn-sm">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveOrders;
