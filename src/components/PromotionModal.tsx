import { useState, useEffect } from "react";
import "../styles/promotionModal.css";

const PromotionModal = ({ isOpen, onClose, promotion }: any) => {
  const [formData, setFormData] = useState({
    type: "",
    discount_percentage: 0,
    start_date: "",
    end_date: "",
    free_delivery: false,
  });

  useEffect(() => {
    if (promotion) {
      setFormData(promotion);
    }
  }, [promotion]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    onClose();
  };

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{promotion ? "Edit Promotion" : "Add Promotion"}</h3>
        <form onSubmit={handleSubmit}>
          <label>Type:</label>
          <input type="text" name="type" value={formData.type} onChange={handleChange} required />

          <label>Discount %:</label>
          <input type="number" name="discount_percentage" value={formData.discount_percentage} onChange={handleChange} />

          <label>Start Date:</label>
          <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} required />

          <label>End Date:</label>
          <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} required />

          <label>
            <input type="checkbox" name="free_delivery" checked={formData.free_delivery} onChange={handleChange} />
            Free Delivery
          </label>

          <div className="modal-actions">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="close-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default PromotionModal;
