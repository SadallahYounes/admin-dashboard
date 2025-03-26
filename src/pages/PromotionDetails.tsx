import "../styles/promotionDetails.css";
import PromotionConditionsTable from "../components/PromotionConditionsTable";

const PromotionDetails = ({ isOpen, onClose, promotion }: any) => {
  if (!isOpen || !promotion) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Promotion Details</h3>
        <p><strong>Type:</strong> {promotion.type}</p>
        <p><strong>Discount:</strong> {promotion.discount_percentage}%</p>
        <p><strong>Start Date:</strong> {promotion.start_date}</p>
        <p><strong>End Date:</strong> {promotion.end_date}</p>
        <p><strong>Free Delivery:</strong> {promotion.free_delivery ? "Yes" : "No"}</p>

        <h4>Conditions</h4>
        <PromotionConditionsTable promotionId={promotion.id} />

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PromotionDetails;
