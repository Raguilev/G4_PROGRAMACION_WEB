import React from "react";

interface DeleteUserModalProps {
  show: boolean;
  onHide: () => void;
  confirmDelete: () => void;
}

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
