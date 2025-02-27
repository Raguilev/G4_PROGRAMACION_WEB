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
  const [message, setMessage] = useState<string | null>(null);

  const handleAdd = async () => {
    setMessage(null); // Resetear mensaje
  
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/users/AgregarUsuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newUser),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.msg || "Error al agregar el usuario"); // Aquí se muestra el error real
      }
  
      setMessage("✅ Usuario agregado con éxito");
    } catch (error: any) {
      console.error("Error en la solicitud:", error); // <-- Agrega esto para ver el error en consola
      setMessage(`❌ ${error.message}`);
    }
  };
  

  return (
    <>
      {show && <div className="modal-backdrop fade show"></div>}
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
                  role: e.target.value as "Admin" | "User",
                })
              }
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            {message && <p className="mt-2 text-center">{message}</p>}
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
    </>
  );
};

export default AddUserModal;
