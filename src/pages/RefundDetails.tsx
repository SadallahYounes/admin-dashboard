import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./refundDetails.css";
import "./Sales.tsx";
interface RefundDetails {
  orderId: string;
  date: string;
  status: "Pending" | "Approved" | "Rejected";
  orderTotal: number;
  refundAmount: number;
  reason: string;
  adminComments: string;
  products: {
    category: string;
    name: string;
    quantity: number;
    unitPrice: number;
    subtotal: number;
  }[];
}


// Sample refund details data
const sampleRefundDetails: Record<string, RefundDetails> = {
  "1001": {
    orderId: "1001",
    date: "2025-03-10",
    status: "Approved",
    orderTotal: 120.00,
    refundAmount: 120.00,
    reason: "Product not as described",
    adminComments: "Approved after verification",
    products: [
      { category: "Electronics", name: "Wireless Headphones", quantity: 2, unitPrice: 50.00, subtotal: 100.00 },
      { category: "Accessories", name: "USB-C Cable", quantity: 1, unitPrice: 20.00, subtotal: 20.00 },
    ]
  },
  "1002": {
    orderId: "1002",
    date: "2025-03-11",
    status: "Pending",
    orderTotal: 85.50,
    refundAmount: 85.50,
    reason: "Changed mind",
    adminComments: "Waiting for product return",
    products: [
      { category: "Fashion", name: "Leather Wallet", quantity: 3, unitPrice: 25.00, subtotal: 75.00 },
      { category: "Beauty", name: "Lipstick", quantity: 2, unitPrice: 5.25, subtotal: 10.50 },
    ]
  },
  "1003": {
    orderId: "1003",
    date: "2025-03-12",
    status: "Rejected",
    orderTotal: 47.00,
    refundAmount: 0.00,
    reason: "Product damaged",
    adminComments: "Damage was due to misuse",
    products: [
      { category: "Home & Kitchen", name: "Blender", quantity: 1, unitPrice: 40.00, subtotal: 40.00 },
      { category: "Grocery", name: "Organic Honey", quantity: 1, unitPrice: 7.00, subtotal: 7.00 },
    ]
  }
};

const RefundDetails: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const [refund, setRefund] = useState<RefundDetails | null>(null);

  useEffect(() => {
    if (!orderId) return;

    // Use static data instead of API call
      const refundData = sampleRefundDetails[orderId];
      if (refundData) {
        setRefund(refundData);
      } else {
        console.error("Refund not found for order ID:", orderId);
      }
    }, [orderId]);

    if (!refund) {
      return <p className="loading">Loading refund details...</p>;
    }
    
  return (
    <div className="refund-details-container">
       <h2>Refund Details</h2>
      <p><strong>Order ID:</strong> {refund.orderId}</p>
      <p><strong>Date:</strong> {refund.date}</p>
      <p><strong>Status:</strong> <span className={`status ${refund.status.toLowerCase()}`}>{refund.status}</span></p>
      <p><strong>Order Total:</strong> ${refund.orderTotal.toFixed(2)}</p>
      <p><strong>Refund Amount:</strong> ${refund.refundAmount.toFixed(2)}</p>
      <p><strong>Reason:</strong> {refund.reason}</p>
      <p><strong>Admin Comments:</strong> {refund.adminComments}</p>

      <button onClick={() => navigate("/sales")} className="back-button">
        ← Back to Sales
      </button>

      <h3>Refunded Products</h3>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {refund.products.map((product, index) => (
            <tr key={index}>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>${product.unitPrice.toFixed(2)}</td>
              <td>${product.subtotal.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="back-button" onClick={() => navigate(-1)}>Back to Refunds</button>
    </div>
  );
};

export default RefundDetails;
