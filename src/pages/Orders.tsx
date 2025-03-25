import { useState } from "react";

const Orders = () => {
  const [search, setSearch] = useState("");
  const orders = [
    { id: "ORD123", customer: "John Doe", status: "Pending", total: "$120" },
    { id: "ORD124", customer: "Alice Smith", status: "Shipped", total: "$85" },
    { id: "ORD125", customer: "Mark Wilson", status: "Delivered", total: "$200" },
  ];

  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Orders</h2>
      <input
        type="text"
        placeholder="Search orders..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
