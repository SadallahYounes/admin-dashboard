import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ActiveOrderDetails.css";

// Define order type
interface Order {
  id: number;
  customer: string;
  date: string;
  status: "Pending" | "Processing" | "Shipped" | "Cancelled";
  total: string;
  items: { product: string; quantity: number; price: string }[];
}

const ActiveOrderDetails: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>(); // Get order ID from URL
  const navigate = useNavigate(); // Navigation hook
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    // Mock API call (Replace this with actual API call)
    const mockOrders: Order[] = [
      {
        id: 101,
        customer: "John Doe",
        date: "2025-03-22",
        status: "Pending",
        total: "$120",
        items: [
          { product: "Dog Harness", quantity: 2, price: "$40" },
          { product: "Calming Collar", quantity: 1, price: "$40" },
        ],
      },
      {
        id: 102,
        customer: "Alice Smith",
        date: "2025-03-21",
        status: "Processing",
        total: "$80",
        items: [
          { product: "Cat Toy", quantity: 1, price: "$20" },
          { product: "Pet Shampoo", quantity: 2, price: "$60" },
        ],
      },
    ];

    const foundOrder = mockOrders.find((o) => o.id.toString() === orderId);
    setOrder(foundOrder || null);
  }, [orderId]);

  if (!order) {
    return <div className="container mt-4">Order not found.</div>;
  }

  // Handle "Mark as Shipped"
  const handleMarkAsShipped = () => {
    setOrder((prevOrder) => (prevOrder ? { ...prevOrder, status: "Shipped" } : null));
  };

  // Handle "Cancel Order"
  const handleCancelOrder = () => {
    setOrder((prevOrder) => (prevOrder ? { ...prevOrder, status: "Cancelled" } : null));
  };

  return (
    <div className="container mt-4">
      <h2>Order Details - #{order.id}</h2>
      <p><strong>Customer:</strong> {order.customer}</p>
      <p><strong>Date:</strong> {order.date}</p>
      <p><strong>Status:</strong> <span className={`badge ${order.status === "Pending" ? "bg-warning" : order.status === "Processing" ? "bg-primary" : order.status === "Shipped" ? "bg-success" : "bg-danger"}`}>{order.status}</span></p>
      <p><strong>Order Total:</strong> {order.total}</p>

      <h4>Order Items</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, index) => (
            <tr key={index}>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Action Buttons */}
      {order.status !== "Shipped" && order.status !== "Cancelled" && (
        <div className="mt-3">
          <button className="btn btn-success me-2" onClick={handleMarkAsShipped}>✅ Mark as Shipped</button>
          <button className="btn btn-danger" onClick={handleCancelOrder}>❌ Cancel Order</button>
        </div>
      )}
    </div>
  );
};

export default ActiveOrderDetails;
