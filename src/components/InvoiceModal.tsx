import React, { useEffect, useState } from "react";
import "../styles/invoiceModal.css";

interface Invoice {
  id?: number;
  reference: string;
  customer_id: number;
  issued_at: string;
  net_total: number;
  gross_total: number;
  bill_type: string;
}

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  invoiceToEdit?: Invoice | null;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({ isOpen, onClose, invoiceToEdit }) => {
  const [invoice, setInvoice] = useState<Invoice>({
    reference: "",
    customer_id: 0,
    issued_at: "",
    net_total: 0,
    gross_total: 0,
    bill_type: "Standard",
  });

  useEffect(() => {
    if (invoiceToEdit) {
      setInvoice(invoiceToEdit);
    } else {
      setInvoice({ reference: "", customer_id: 0, issued_at: "", net_total: 0, gross_total: 0, bill_type: "Standard" });
    }
  }, [invoiceToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Saved Invoice:", invoice);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{invoiceToEdit ? "Edit Invoice" : "Add Invoice"}</h2>
        <label>Reference:</label>
        <input type="text" name="reference" value={invoice.reference} onChange={handleChange} />

        <label>Customer ID:</label>
        <input type="number" name="customer_id" value={invoice.customer_id} onChange={handleChange} />

        <label>Issued At:</label>
        <input type="date" name="issued_at" value={invoice.issued_at} onChange={handleChange} />

        <label>Net Total:</label>
        <input type="number" name="net_total" value={invoice.net_total} onChange={handleChange} />

        <label>Gross Total:</label>
        <input type="number" name="gross_total" value={invoice.gross_total} onChange={handleChange} />

        <label>Bill Type:</label>
        <select name="bill_type" value={invoice.bill_type} onChange={handleChange}>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </select>

        <div className="modal-actions">
          <button onClick={handleSubmit} className="btn btn-primary">Save</button>
          <button onClick={onClose} className="btn btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
