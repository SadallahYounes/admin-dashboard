import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import "../styles/dashboard.css";
// Function to create a chart
const createChart = (chartId: string, label: string, data: number[], backgroundColor: string) => {
  const ctx = document.getElementById(chartId) as HTMLCanvasElement;
  
  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Example labels
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: backgroundColor,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
};

const Dashboard = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: "John Doe", rating: 5, comment: "Great service!" },
    { id: 2, user: "Alice Smith", rating: 4, comment: "Very satisfied!" },
    { id: 3, user: "Mark Johnson", rating: 3, comment: "Could be better." },
  ]);

  useEffect(() => {
    // Destroy any existing chart to prevent the "Canvas is already in use" error
    Chart.getChart("grossSalesChart")?.destroy();
    Chart.getChart("orderVolumeChart")?.destroy();
    Chart.getChart("averageOrderValueChart")?.destroy();

    // Create Charts
    createChart("grossSalesChart", "Gross Sales", [5000, 7000, 8000, 6500, 9000, 11000], "#007bff");
    createChart("orderVolumeChart", "Order Volume", [100, 200, 150, 180, 250, 300], "#28a745");
    createChart("averageOrderValueChart", "Avg Order Value", [50, 40, 60, 45, 70, 55], "#ffc107");
  }, []);

  const [orders, setOrders] = useState({
    total: 500, // Example: total weekly orders
    rejected: 30,
    canceled: 40,
    erroneous: 10,
    incomplete: 20,
    modified: 50,
  });

    // Calculate percentages
    const getPercentage = (count: number) => ((count / orders.total) * 100).toFixed(1) + "%";

    const [bestSellingProducts, setBestSellingProducts] = useState([
      { rank: 1, name: "Wireless Headphones", sold: 150 },
      { rank: 2, name: "Smart Watch", sold: 120 },
      { rank: 3, name: "Gaming Mouse", sold: 100 },
      { rank: 4, name: "Bluetooth Speaker", sold: 95 },
      { rank: 5, name: "Laptop Stand", sold: 85 },
      { rank: 6, name: "Mechanical Keyboard", sold: 80 },
      { rank: 7, name: "External Hard Drive", sold: 75 },
      { rank: 8, name: "Smartphone Case", sold: 70 },
      { rank: 9, name: "Fitness Tracker", sold: 65 },
      { rank: 10, name: "Portable Charger", sold: 60 },
    ]);


  return (
    <div className="dashboard">
      <div className="row">
        {/* Gross Sales Chart */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Gross Sales</div>
            <div className="card-body">
              <canvas id="grossSalesChart"></canvas>
            </div>
          </div>
        </div>

        {/* Order Volume Chart */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Order Volume</div>
            <div className="card-body">
              <canvas id="orderVolumeChart"></canvas>
            </div>
          </div>
        </div>

        {/* Average Order Value Chart */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Average Order Value</div>
            <div className="card-body">
              <canvas id="averageOrderValueChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Recent Reviews</h4>
            </div>
            <div className="card-body reviews-section">
              {reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <strong>{review.user}</strong> ⭐ {review.rating}
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
              {/* Service Quality Analysis */}
        <div className="col-md-6">
         
          <div className="card">
            <div className="card-header">
              <h4>Service Quality Analysis</h4>
            </div>
            <div className="card-body service-quality">
              <ul>
                <li>🔴 Rejected Orders: <strong>{getPercentage(orders.rejected)}</strong></li>
                <li>🟠 Canceled Orders: <strong>{getPercentage(orders.canceled)}</strong></li>
                <li>🟡 Erroneous Orders: <strong>{getPercentage(orders.erroneous)}</strong></li>
                <li>🔵 Incomplete Orders: <strong>{getPercentage(orders.incomplete)}</strong></li>
                <li>🟢 Modified Orders: <strong>{getPercentage(orders.modified)}</strong></li>
              </ul>
            </div>
             </div>
          
        </div>

         {/* Top 10 Best-Selling Products */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>🏆 Top 10 Best-Selling Products</h4>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Product Name</th>
                    <th>Units Sold</th>
                  </tr>
                </thead>
                <tbody>
                  {bestSellingProducts.map((product) => (
                    <tr key={product.rank}>
                      <td>{product.rank}</td>
                      <td>{product.name}</td>
                      <td>{product.sold}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Dashboard;
