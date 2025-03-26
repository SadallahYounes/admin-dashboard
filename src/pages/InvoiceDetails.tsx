import React from "react";
import { useParams } from "react-router-dom";
import "../styles/InvoiceDetails.css";

interface Invoice {
  id: number;
  reference: string;
  customer_id: number;
  issued_at: string;
  net_total: number;
  gross_total: number;
  bill_type: string;
}

interface InvoiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  invoice: Invoice | null;
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ isOpen, onClose, invoice }) => {
  if (!isOpen || !invoice) return null;
  return (
    <div className="invoice-details">
      <h2>Invoice #{invoice.id}</h2>
      <p><strong>Customer:</strong> John Doe</p>
      <p><strong>Issued At:</strong> March 25, 2025</p>
      <p><strong>Period:</strong> March 1 - March 31</p>
      <p><strong>Bill Type:</strong> Standard</p>

      <h3>Invoice Items</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Item Type</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Service</td>
            <td>Consultation</td>
            <td>2</td>
            <td>$50</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceDetails;
