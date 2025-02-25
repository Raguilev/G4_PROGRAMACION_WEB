import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/sidebar/admin_sidebar";
import ListaUsuariosTable from "../components/tablas/ListaUsuariosTable";
import AddUserModal from "../components/modales/AddUserModal";
import EditUserModal from "../components/modales/EditUserModal";
import DeleteUserModal from "../components/modales/DeleteUserModal";
import FilterUserModal from "../components/modales/FilterUserModal";

interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  role: "Admin" | "User";
}

const Usuarios = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users/list");
      const data = await response.json();
      const formattedUsers = data.users.map((user: any) => ({
        id: Number(user.id),
        name: user.name,
        email: user.email,
        password: user.password_hash || "",
        role: user.role_id === 1 ? "Admin" : "User",
      })).sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
      setUsers(formattedUsers);
      setFilteredUsers(formattedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="container mt-4">
        <h2>Mis usuarios</h2>
        <div className="d-flex justify-content-end mb-3 gap-2">
          <button className="btn btn-primary" onClick={() => setShowFilterModal(true)}>Filtrar</button>
          <button className="btn btn-success" onClick={() => setShowAddModal(true)}>Agregar</button>
        </div>

        <ListaUsuariosTable 
          users={filteredUsers} 
          onEdit={(user) => { 
            setSelectedUser({ ...user, password: user.password || "" });
            setShowEditModal(true); 
          }} 
          onDelete={(user) => { 
            setSelectedUser(user);
            setShowDeleteModal(true); 
          }}
        />

        <AddUserModal show={showAddModal} onHide={() => setShowAddModal(false)} addUser={(newUser) => {
          const newUserFormatted = { ...newUser, id: Number(newUser.id), password: newUser.password || "" };
          setUsers([...users, newUserFormatted].sort((a, b) => a.id - b.id));
          setFilteredUsers([...users, newUserFormatted].sort((a, b) => a.id - b.id));
          fetchUsers();
        }} />
        
        <EditUserModal 
          show={showEditModal} 
          onHide={() => setShowEditModal(false)} 
          user={selectedUser ? { ...selectedUser, password: selectedUser.password || "" } : null} 
          updateUser={(updatedUser) => {
            setUsers(users.map(u => u.id === updatedUser.id ? { ...updatedUser, id: Number(updatedUser.id), password: updatedUser.password || "" } : u).sort((a, b) => a.id - b.id));
            setFilteredUsers(users.map(u => u.id === updatedUser.id ? { ...updatedUser, id: Number(updatedUser.id), password: updatedUser.password || "" } : u).sort((a, b) => a.id - b.id));
            fetchUsers();
          }} 
        />
        
        <DeleteUserModal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} confirmDelete={() => {
          if (selectedUser) {
            setUsers(users.filter(u => u.id !== selectedUser.id).sort((a, b) => a.id - b.id));
            setFilteredUsers(filteredUsers.filter(u => u.id !== selectedUser.id).sort((a, b) => a.id - b.id));
            fetchUsers();
          }
        }} />
        
        <FilterUserModal show={showFilterModal} onHide={() => setShowFilterModal(false)} filterUsers={(role) => {
          setFilteredUsers(users.filter(u => u.role === role).sort((a, b) => a.id - b.id));
        }} />
      </div>
    </div>
  );
};

export default Usuarios;

