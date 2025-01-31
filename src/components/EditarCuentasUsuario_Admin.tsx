import React, { useState, useRef } from 'react';
import AdminSidebar from "../components/sidebar/admin_sidebar";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'Admin' | 'User';
}

const EditarCuentasUsuario_Admin: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: '001', name: 'Jessica', email: 'jess@taxes.com', password: '12345', role: 'Admin' },
    { id: '002', name: 'Jhon', email: 'jon@taxes.com', password: '6789', role: 'User' },
    { id: '003', name: 'Ana', email: 'ana@taxes.com', password: '7890', role: 'User' },
    { id: '004', name: 'Pedro', email: 'pedro@taxes.com', password: '4567', role: 'Admin' },
  ]);

  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<User>({ id: '', name: '', email: '', password: '', role: 'User' });
  const [filterRole, setFilterRole] = useState<'All' | 'Admin' | 'User'>('All'); // Estado para el filtro
  const editModalRef = useRef<HTMLDivElement>(null);
  const addModalRef = useRef<HTMLDivElement>(null);

  
  const openEditModal = (user: User) => {
    setEditingUser({ ...user });
    if (editModalRef.current) editModalRef.current.style.display = 'flex';
  };

  const closeEditModal = () => {
    setEditingUser(null);
    if (editModalRef.current) editModalRef.current.style.display = 'none';
  };


  const saveEdit = () => {
    if (!editingUser) return;
    setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
    closeEditModal();
  };

  
  const openAddModal = () => {
    setNewUser({ id: '', name: '', email: '', password: '', role: 'User' });
    if (addModalRef.current) addModalRef.current.style.display = 'flex';
  };

  const closeAddModal = () => {
    if (addModalRef.current) addModalRef.current.style.display = 'none';
  };

  
  const addUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) return;
    const newId = (users.length + 1).toString().padStart(3, '0'); // Generar ID único
    setUsers([...users, { ...newUser, id: newId }]);
    closeAddModal();
  };

 
  const deleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id));
  };

 
  const filteredUsers = filterRole === 'All' ? users : users.filter(user => user.role === filterRole);

  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="main-content">
        <div className="container-box">
          <header>
            <h1>Mis usuarios</h1>
            <div className="actions mb-3">
              <button className="btn btn-success" onClick={openAddModal}>Agregar Usuario</button>
             
              <div className="dropdown ms-2 d-inline-block">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="filterDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filtrar por rol
                </button>
                <ul className="dropdown-menu" aria-labelledby="filterDropdown">
                  <li>
                    <button className="dropdown-item" onClick={() => setFilterRole('All')}>
                      Todos
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setFilterRole('Admin')}>
                      Admins
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setFilterRole('User')}>
                      Usuarios
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Password</th>
                <th>Rol</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => openEditModal(user)}>✏️</button>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteUser(user.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
      <div className="modal" ref={addModalRef} style={{ display: 'none' }}>
        <div className="modal-content">
          <h2>Agregar Usuario</h2>
          <input type="text" placeholder="Nombre" value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} className="form-control" />
          <input type="email" placeholder="Correo" value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} className="form-control mt-2" />
          <input type="password" placeholder="Contraseña" value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} className="form-control mt-2" />
          <select value={newUser.role} onChange={e => setNewUser({ ...newUser, role: e.target.value as 'Admin' | 'User' })} className="form-select mt-2">
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <div className="modal-actions mt-3">
            <button className="btn btn-secondary" onClick={closeAddModal}>Cancelar</button>
            <button className="btn btn-success" onClick={addUser}>Agregar</button>
          </div>
        </div>
      </div>

      
      <div className="modal" ref={editModalRef} style={{ display: 'none' }}>
        <div className="modal-content">
          <h2>Editar Usuario</h2>
          {editingUser && (
            <>
              <input type="text" value={editingUser.name} onChange={e => setEditingUser(prev => prev ? { ...prev, name: e.target.value } : null)} className="form-control" />
              <input type="email" value={editingUser.email} onChange={e => setEditingUser(prev => prev ? { ...prev, email: e.target.value } : null)} className="form-control mt-2" />
              <input type="password" value={editingUser.password} onChange={e => setEditingUser(prev => prev ? { ...prev, password: e.target.value } : null)} className="form-control mt-2" />
              <select value={editingUser.role} onChange={e => setEditingUser(prev => prev ? { ...prev, role: e.target.value as 'Admin' | 'User' } : null)} className="form-select mt-2">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
              <div className="modal-actions mt-3">
                <button className="btn btn-secondary" onClick={closeEditModal}>Cancelar</button>
                <button className="btn btn-success" onClick={saveEdit}>Guardar</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditarCuentasUsuario_Admin;