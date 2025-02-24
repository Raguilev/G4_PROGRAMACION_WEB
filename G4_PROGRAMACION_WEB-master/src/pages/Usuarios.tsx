import React, { useState } from "react";
import AdminSidebar from "../components/sidebar/admin_sidebar";
import ListaUsuariosTable from "../components/tablas/ListaUsuariosTable";
import AddUserModal from "../components/modales/AddUserModal";
import EditUserModal from "../components/modales/EditUserModal";
import DeleteUserModal from "../components/modales/DeleteUserModal";
import FilterUserModal from "../components/modales/FilterUserModal";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "Admin" | "User";
}

const Usuarios = () => {
  const [users, setUsers] = useState<User[]>([
    { id: "001", name: "Jessica", email: "jess@taxes.com", password: "12345", role: "Admin" },
    { id: "002", name: "Jhon", email: "jon@taxes.com", password: "6789", role: "User" },
    { id: "003", name: "Diego", email: "dieg@taxes.com", password: "1011", role: "User" },
    { id: "004", name: "Juan", email: "juan@taxes.com", password: "1213", role: "User" },
    { id: "005", name: "Luis", email: "luis@taxes.com", password: "1415", role: "User" },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

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
          users={users} 
          onEdit={(user) => { setSelectedUser(user); setShowEditModal(true); }} 
          onDelete={(user) => { setSelectedUser(user); setShowDeleteModal(true); }}
        />

        <AddUserModal show={showAddModal} onHide={() => setShowAddModal(false)} addUser={(newUser) => setUsers([...users, newUser])} />
        <EditUserModal show={showEditModal} onHide={() => setShowEditModal(false)} user={selectedUser} updateUser={(updatedUser) => {
          setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
        }} />
        <DeleteUserModal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} confirmDelete={() => {
          if (selectedUser) {
            setUsers(users.filter(u => u.id !== selectedUser.id));
          }
        }} />
        <FilterUserModal show={showFilterModal} onHide={() => setShowFilterModal(false)} filterUsers={(role) => {
          setUsers(users.filter(u => u.role === role));
        }} />
      </div>
    </div>
  );
};

export default Usuarios;
