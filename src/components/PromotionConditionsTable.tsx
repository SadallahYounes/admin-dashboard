const conditions = [
    { id: 1, promotion_id: 1, product_id: 101, min_quantity: 2, required_orders: 3, free_delivery: true },
    { id: 2, promotion_id: 1, product_id: 102, min_quantity: 1, required_orders: 2, free_delivery: false },
  ];
  
  const PromotionConditionsTable = ({ promotionId }: any) => {
    const filteredConditions = conditions.filter(c => c.promotion_id === promotionId);
  
    return (
      <table className="conditions-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Min Quantity</th>
            <th>Required Orders</th>
            <th>Free Delivery</th>
          </tr>
        </thead>
        <tbody>
          {filteredConditions.map((condition) => (
            <tr key={condition.id}>
              <td>{condition.product_id}</td>
              <td>{condition.min_quantity}</td>
              <td>{condition.required_orders}</td>
              <td>{condition.free_delivery ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default PromotionConditionsTable;
  