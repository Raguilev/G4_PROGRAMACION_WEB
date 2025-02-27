import React from "react";

interface DeleteUserModalProps {
  show: boolean;
  onHide: () => void;
  confirmDelete: () => void;
}

const deleteUser = async (userId: string | number) => {
  try {
    const token = localStorage.getItem("token"); // Obtén el token de autenticación
    const response = await fetch(`http://localhost:5000/users/EliminarUsuario/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error al eliminar el usuario");
    }

    const data = await response.json();
    return data; // Devuelve el mensaje de éxito
  } catch (error) {
    console.error(error);
    throw error;
  }
};



const DeleteUserModal: React.FC<DeleteUserModalProps> = ({ show, onHide, confirmDelete }) => (
  <>
  {show && <div className="modal-backdrop fade show"></div>}
  <div className={`modal ${show ? "d-block " : "d-none"}`}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content p-4 text-center">
        <h4>¡Aviso!</h4>
        <p>¿Está seguro de que desea eliminar este registro?</p>
        <div className="d-flex justify-content-around">
          <button className="btn btn-secondary" onClick={onHide}>No</button>
          <button className="btn btn-danger" onClick={confirmDelete}>Sí</button>
        </div>
      </div>
    </div>
  </div>
  </>
);

export default DeleteUserModal;
