import React, { useState } from "react";
import UserModal from "../components/UserModal";
import "../styles/Users.css"; // Styling for users table

interface User {
  id?: number;
  username: string;
  email: string;
  password: string;  
  role: "admin" | "customer" | "order preparer";
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: "JohnDoe", email: "john@example.com", password: "password123", role: "admin" },
    { id: 2, username: "AliceSmith", email: "alice@example.com", password: "securepass", role: "customer" },
    { id: 3, username: "TomWorker", email: "tom@example.com", password: "workerpass", role: "order preparer" }, 
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

  const openAddModal = () => {
    setUserToEdit(null);
    setModalOpen(true);
  };

  const openEditModal = (user: User) => {
    setUserToEdit(user);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const saveUser = (user: User) => {
    if (userToEdit) {
      setUsers(users.map((u) => (u.id === userToEdit.id ? { ...user, id: userToEdit.id } : u)));
    } else {
      setUsers([...users, { ...user, id: users.length + 1 }]);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <button className="btn btn-success mb-3" onClick={openAddModal}>
        + Add User
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th> {/* 🔹 Added Password Column */}
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>********</td> {/* 🔹 Masked password for security */}
              <td>{user.role}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => openEditModal(user)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* User Modal */}
      <UserModal isOpen={modalOpen} onClose={closeModal} onSave={saveUser} userToEdit={userToEdit} />
    </div>
  );
};

export default Users;
