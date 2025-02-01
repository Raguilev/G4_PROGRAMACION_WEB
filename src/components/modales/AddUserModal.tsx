import React, { useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "Admin" | "User"; 
}

interface AddUserModalProps {
  show: boolean;
  onHide: () => void;
  addUser: (newUser: User) => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ show, onHide, addUser }) => {
  const [newUser, setNewUser] = useState<Omit<User, "id">>({ 
    name: "",
    email: "",
    password: "",
    role: "User", 
  });

  const handleAdd = () => {
    addUser({ ...newUser, id: Date.now().toString() });
    onHide();
  };

  return (
    <div className={`modal ${show ? "d-block" : "d-none"}`}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          <h3>Agregar usuario</h3>
          <input
            type="text"
            placeholder="Nombre"
            className="form-control mb-2"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Correo"
            className="form-control mb-2"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="form-control mb-2"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
          <select
            className="form-select"
            value={newUser.role}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                role: e.target.value as "Admin" | "User", // Convertimos el valor a tipo literal
              })
            }
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
          <div className="mt-3 d-flex justify-content-between">
            <button className="btn btn-secondary" onClick={onHide}>
              Cancelar
            </button>
            <button className="btn btn-success" onClick={handleAdd}>
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
