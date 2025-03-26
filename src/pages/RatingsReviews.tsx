import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import "../styles/ratingsreviews.css";
import "chart.js/auto"; 

const RatingsReviews = () => {
  // Sample reviews data
  const [reviews, setReviews] = useState([
    { id: 1, user: "John Doe", rating: 5, comment: "Great product!", response: "Thank you!" },
    { id: 2, user: "Jane Smith", rating: 4, comment: "Good, but could be improved.", response: "We'll work on it!" },
    { id: 3, user: "Alice Johnson", rating: 3, comment: "It's okay, nothing special.", response: "Thanks for the feedback!" },
  ]);

  // Sample ratings distribution
  const ratingsData = {
    labels: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
    datasets: [
      {
        label: "Number of Ratings",
        data: [2, 5, 8, 12, 25], // Example values
        backgroundColor: ["#ff4d4d", "#ff9933", "#ffcc00", "#66cc66", "#339933"],
      },
    ],
  };

  // Sample ratings trend over time
  const ratingsTrendData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Average Rating",
        data: [3.2, 3.5, 3.8, 4.0, 4.3, 4.5],
        borderColor: "#007bff",
        fill: false,
      },
    ],
  };

  return (
    <div className="ratings-reviews">
      <div className="row">
        {/* Ratings Distribution Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>⭐ Average Rating Per Star</h4>
            </div>
            <div className="card-body">
              <Bar data={ratingsData} />
            </div>
          </div>
        </div>

        {/* Ratings Trend Over Time */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>📊 Rating Trends Over Time</h4>
            </div>
            <div className="card-body">
              <Line data={ratingsTrendData} />
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>💬 List of Reviews & Responses</h4>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Rating</th>
                    <th>Comment</th>
                    <th>Response</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <tr key={review.id}>
                      <td>{review.user}</td>
                      <td>{review.rating} ⭐</td>
                      <td>{review.comment}</td>
                      <td>{review.response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RatingsReviews;
