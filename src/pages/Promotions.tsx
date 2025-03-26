import { useState } from "react";
import PromotionTable from "../components/PromotionTable";
import PromotionModal from "../components/PromotionModal";
import PromotionDetails from "./PromotionDetails";
import "../styles/promotions.css";

// Define Promotion type
interface Promotion {
  id: number;
  type: string;
  discount_percentage: number;
  start_date: string;
  end_date: string;
  free_delivery: boolean;
}

const Promotions = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(null);

  // Example promotions data (Replace with API data later)
  const promotions: Promotion[] = [
    { id: 1, type: "Discount", discount_percentage: 10, start_date: "2025-04-01", end_date: "2025-04-30", free_delivery: false },
    { id: 2, type: "Free Shipping", discount_percentage: 0, start_date: "2025-03-15", end_date: "2025-04-15", free_delivery: true },
  ];

  const handleEdit = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
    setModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this promotion?")) {
      console.log("Deleted promotion with ID:", id);
    }
  };

  const handleView = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
    setDetailsOpen(true);
  };

  return (
    <div className="promotions-container">
      <div className="promotions-header">
        <h2>Promotions</h2>
        <button className="add-btn" onClick={() => setModalOpen(true)}>+ Add Promotion</button>
      </div>

      {/* ✅ Pass the promotions prop to PromotionTable */}
      <PromotionTable 
        promotions={promotions} 
        onView={handleView} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />

      {isModalOpen && (
        <PromotionModal 
          isOpen={isModalOpen} 
          onClose={() => setModalOpen(false)} 
          promotion={selectedPromotion} 
        />
      )}

      {isDetailsOpen && (
        <PromotionDetails 
          isOpen={isDetailsOpen} 
          onClose={() => setDetailsOpen(false)} 
          promotion={selectedPromotion} 
        />
      )}
    </div>
  );
};

export default Promotions;
