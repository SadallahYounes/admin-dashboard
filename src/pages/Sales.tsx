import React from "react";
import "./sales.css";
import {useEffect, useState } from "react";
import "./RefundDetails.tsx";
import { Link } from "react-router-dom";


interface RefundRequest {
    orderId: string;
    date: string;
    status: "Pending" | "Approved" | "Rejected";
    orderTotal: number;
    refundAmount: number;
  }
  
  //Sample Refund Requests Data
  const sampleRefundRequests: RefundRequest[] = [
      {
          orderId: "1001",
          date: "2025-03-10",
          status: "Approved",
          orderTotal: 120.00,
          refundAmount: 120.00
      },
      {
          orderId: "1002",
          date: "2025-03-11",
          status: "Pending",
          orderTotal: 85.50,
          refundAmount: 85.50
      },
      {
          orderId: "1003",
          date: "2025-03-12",
          status: "Rejected",
          orderTotal: 47.00,
          refundAmount: 0.00
      }
  ];
  
  // Sample Order Data
  const orders = [
    {
      id: "1001",
      customer: "John Doe",
      date: "2025-03-10",
      status: "Approved",
      total: "$120.00",
      products: [
        { category: "Electronics", name: "Wireless Headphones", quantity: 2, unitPrice: "$50.00", subtotal: "$100.00" },
        { category: "Accessories", name: "USB-C Cable", quantity: 1, unitPrice: "$20.00", subtotal: "$20.00" },
      ],
    },
    {
      id: "1002",
      customer: "Jane Smith",
      date: "2025-03-11",
      status: "Pending",
      total: "$85.50",
      products: [
        { category: "Fashion", name: "Leather Wallet", quantity: 3, unitPrice: "$25.00", subtotal: "$75.00" },
        { category: "Beauty", name: "Lipstick", quantity: 2, unitPrice: "$5.25", subtotal: "$10.50" },
      ],
    },
    {
      id: "1003",
      customer: "Robert Brown",
      date: "2025-03-12",
      status: "Rejected",
      total: "$47.00",
      products: [
        { category: "Home & Kitchen", name: "Blender", quantity: 1, unitPrice: "$40.00", subtotal: "$40.00" },
        { category: "Grocery", name: "Organic Honey", quantity: 1, unitPrice: "$7.00", subtotal: "$7.00" },
      ],
    },
    {
      id: "1004",
      customer: "Emily Davis",
      date: "2025-03-13",
      status: "Approved",
      total: "$250.75",
      products: [
        { category: "Beauty", name: "Face Cream", quantity: 5, unitPrice: "$15.00", subtotal: "$75.00" },
        { category: "Electronics", name: "Smartwatch", quantity: 1, unitPrice: "$175.75", subtotal: "$175.75" },
      ],
    },
  ];

    // Sample Sold Products Data
    const soldProducts = [
        { category: "Electronics", name: "Wireless Headphones", quantity: 15, unitPrice: "$50.00", subtotal: "$750.00" },
        { category: "Fashion", name: "Leather Wallet", quantity: 30, unitPrice: "$25.00", subtotal: "$750.00" },
        { category: "Home & Kitchen", name: "Blender", quantity: 10, unitPrice: "$40.00", subtotal: "$400.00" },
        { category: "Beauty", name: "Face Cream", quantity: 50, unitPrice: "$15.00", subtotal: "$750.00" },
      ];


const Sales: React.FC = () => {

   // Initialize with static data
   const [refundSummary] = useState({
    totalRequests: 3, // matches number of sample refund requests
    refundedOrders: 1, // count of "Approved" status in sample data
    refundedAmount: 120.00 // sum of refundAmount for "Approved" requests
  });

    // Initialize with sample data
    const [refundRequests] = useState<RefundRequest[]>(sampleRefundRequests);

  return (
    <div className="sales-container">
      <h2 className="section-title">Sales Summary</h2>
      
      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="small-box bg-info">
          <div className="inner">
            <h3>$50,000</h3>
            <p>Gross Sales</p>
          </div>
          <div className="icon">
            <i className="fas fa-dollar-sign"></i>
          </div>
        </div>

        <div className="small-box bg-success">
          <div className="inner">
            <h3>$45,000</h3>
            <p>Net Sales</p>
          </div>
          <div className="icon">
            <i className="fas fa-chart-line"></i>
          </div>
        </div>

        <div className="small-box bg-warning">
          <div className="inner">
            <h3>1,200</h3>
            <p>Order Volume</p>
          </div>
          <div className="icon">
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>

        <div className="small-box bg-danger">
          <div className="inner">
            <h3>$42</h3>
            <p>Average Order Value</p>
          </div>
          <div className="icon">
            <i className="fas fa-receipt"></i>
          </div>
        </div>
      </div>
      
       {/* Summary Cards (Already implemented) */}
       <div className="summary-cards">
        {/* Existing summary cards here */}
      </div>

      {/* Order List Table */}
      <h3 className="section-subtitle">Order List</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sold Products Table */}
      <h3 className="section-subtitle">Sold Products</h3>
      <div className="sold-products-table">
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
            {orders.flatMap((order) =>
              order.products.map((product, index) => (
                <tr key={`${order.id}-${index}`}>
                  <td>{product.category}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.subtotal}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
     
      {/* Refund Summary Section */}
        <div className="refund-summary">
        <div className="refund-card">
            <h4>Total Refund Requests</h4>
            <p>{refundSummary.totalRequests}</p>
        </div>
        <div className="refund-card">
            <h4>Total Refunded Orders</h4>
            <p>{refundSummary.refundedOrders}</p>
        </div>
        <div className="refund-card">
            <h4>Total Refunded Amount</h4>
            <p>${refundSummary.refundedAmount.toFixed(2)}</p>
        </div>
        </div>

       {/* Refund Requests Table */}
        <div className="refund-requests-table">
            <h3>Refund Requests</h3>
              <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Order Total</th>
                            <th>Refund Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {refundRequests.map((request, index) => (
                            <tr key={index}>
                                <td>
                                    <Link to={`/refunds/${request.orderId}`} className="order-link">
                                        {request.orderId}
                                    </Link>
                                </td>
                                <td>{request.date}</td>
                                <td><span className={`status ${request.status.toLowerCase()}`}>{request.status}</span></td>
                                <td>${request.orderTotal.toFixed(2)}</td>
                                <td>${request.refundAmount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>

        
    </div>
  );
};

export default Sales;
