import React, { useState } from "react";
import InvoiceModal from "../components/InvoiceModal";
import InvoiceDetails from "./InvoiceDetails";
import "../styles/invoices.css";

interface Invoice {
  id: number;
  reference: string;
  customer_id: number;
  issued_at: string;
  net_total: number;
  gross_total: number;
  bill_type: string;
}

const Invoices: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([
    { id: 1, reference: "INV001", customer_id: 101, issued_at: "2025-03-01", net_total: 500, gross_total: 600, bill_type: "Standard" },
    { id: 2, reference: "INV002", customer_id: 102, issued_at: "2025-03-05", net_total: 700, gross_total: 850, bill_type: "Premium" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const openModal = (invoice?: Invoice) => {
    setSelectedInvoice(invoice || null);
    setModalOpen(true);
  };

  const openDetails = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setDetailsOpen(true);
  };

  const closeModals = () => {
    setModalOpen(false);
    setDetailsOpen(false);
  };

  const deleteInvoice = (id: number) => {
    setInvoices(invoices.filter(invoice => invoice.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2>Invoices</h2>
      <button className="btn btn-success mb-3" onClick={() => openModal()}>
        + Add Invoice
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Reference</th>
            <th>Customer ID</th>
            <th>Issued At</th>
            <th>Net Total</th>
            <th>Gross Total</th>
            <th>Bill Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.reference}</td>
              <td>{invoice.customer_id}</td>
              <td>{invoice.issued_at}</td>
              <td>${invoice.net_total}</td>
              <td>${invoice.gross_total}</td>
              <td>{invoice.bill_type}</td>
              <td>
                <button className="btn btn-info btn-sm me-2" onClick={() => openDetails(invoice)}>
                  View
                </button>
                <button className="btn btn-warning btn-sm me-2" onClick={() => openModal(invoice)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteInvoice(invoice.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Invoice Modals */}
      <InvoiceModal isOpen={modalOpen} onClose={closeModals} invoiceToEdit={selectedInvoice} />
      <InvoiceDetails isOpen={detailsOpen} onClose={closeModals} invoice={selectedInvoice} />
    </div>
  );
};

export default Invoices;
