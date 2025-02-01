import React, { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "Admin" | "User";
}

interface EditUserModalProps {
  show: boolean;
  onHide: () => void;
  user: User | null;
  updateUser: (updatedUser: User) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ show, onHide, user, updateUser }) => {
  const [editedUser, setEditedUser] = useState<User | null>(user);

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const handleSave = () => {
    if (editedUser) {
      updateUser(editedUser);
      onHide();
    }
  };

  return (
    <div className={`modal ${show ? "d-block" : "d-none"}`}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          <h3>Editar usuario</h3>
          {editedUser && (
            <>
              <input type="text" className="form-control mb-2" value={editedUser.name} onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })} />
              <input type="email" className="form-control mb-2" value={editedUser.email} onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} />
              <input type="password" className="form-control mb-2" value={editedUser.password} onChange={(e) => setEditedUser({ ...editedUser, password: e.target.value })} />
              <select className="form-select" value={editedUser.role} onChange={(e) => setEditedUser({ ...editedUser, role: e.target.value as "Admin" | "User" })}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <div className="mt-3 d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={onHide}>Cancelar</button>
                <button className="btn btn-success" onClick={handleSave}>Guardar</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
