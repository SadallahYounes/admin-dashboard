import React, { useState, useEffect } from "react";
import "../styles/UserModal.css"; // Styling for modal

interface User {
  id?: number;
  username: string;
  email: string;
  password: string; // 🔹 Added password field
  role: "admin" | "customer" | "order preparer";
}

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (user: User) => void;
  userToEdit?: User | null;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave, userToEdit }) => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "", // 🔹 Initialize password
    role: "customer",
  });

  // Populate fields if editing an existing user
  useEffect(() => {
    if (userToEdit) {
      setUser(userToEdit);
    } else {
      setUser({ username: "", email: "", password: "", role: "customer" }); // 🔹 Reset password field
    }
  }, [userToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(user);
    onClose(); // Close modal after saving
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{userToEdit ? "Edit User" : "Add User"}</h2>

        <label>Username:</label>
        <input type="text" name="username" value={user.username} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} />

        <label>Password:</label> {/* 🔹 Added password field */}
        <input type="password" name="password" value={user.password} onChange={handleChange} />

        <label>Role:</label>
        <select name="role" value={user.role} onChange={handleChange}>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
          <option value="order preparer">Order Preparer</option>
        </select>

        <div className="modal-actions">
          <button onClick={handleSubmit} className="btn btn-primary">
            {userToEdit ? "Update" : "Add"} User
          </button>
          <button onClick={onClose} className="btn btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
