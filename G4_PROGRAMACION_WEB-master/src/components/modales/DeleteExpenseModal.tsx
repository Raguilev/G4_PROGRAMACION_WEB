import React, { useState } from "react";

interface DeleteExpenseModalProps {
  expenseId: number | null;
  closeModal: () => void;
  refreshExpenses: () => void; // ✅ Recargar gastos después de eliminar
}

const DeleteExpenseModal: React.FC<DeleteExpenseModalProps> = ({ expenseId, closeModal, refreshExpenses }) => {
  const [error, setError] = useState<string>("");

  const handleDelete = async () => {
    if (!expenseId) return;

    try {
      const response = await fetch(`http://localhost:5000/expenses/${expenseId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.msg || "Error al eliminar gasto"); // ✅ Mostrar error en UI
        return;
      }

      console.log("📌 Gasto eliminado correctamente");
      refreshExpenses(); // ✅ Recargar la lista de gastos
      closeModal();
    } catch (err) {
      console.error("❌ Error eliminando gasto:", err);
      setError("No se pudo conectar con el servidor.");
    }
  };

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show d-block" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Eliminar Gasto</h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <p>¿Está seguro de que desea eliminar este gasto?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
              <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteExpenseModal;
