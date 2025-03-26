interface Promotion {
  id: number;
  type: string;
  discount_percentage: number;
  start_date: string;
  end_date: string;
  free_delivery: boolean;
}

const PromotionTable = ({
  promotions, // ✅ Add promotions as a prop
  onView,
  onEdit,
  onDelete
}: {
  promotions: Promotion[]; // ✅ Define expected prop type
  onView: (promotion: Promotion) => void;
  onEdit: (promotion: Promotion) => void;
  onDelete: (id: number) => void;
}) => {
  return (
    <table className="promotions-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Discount %</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Free Delivery</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {promotions.map((promo) => (
          <tr key={promo.id}>
            <td>{promo.id}</td>
            <td>{promo.type}</td>
            <td>{promo.discount_percentage}%</td>
            <td>{promo.start_date}</td>
            <td>{promo.end_date}</td>
            <td>{promo.free_delivery ? "Yes" : "No"}</td>
            <td className="action-buttons">
              <button className="view-btn" onClick={() => onView(promo)}>View</button>
              <button className="edit-btn" onClick={() => onEdit(promo)}>Edit</button>
              <button className="delete-btn" onClick={() => onDelete(promo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PromotionTable;
