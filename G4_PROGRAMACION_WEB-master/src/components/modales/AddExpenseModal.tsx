import { useState } from "react";

interface Expense {
  id: number;
  user_id: number;
  date: string;
  category_id: number;
  description: string;
  recurring: boolean; // 🔥 Se asegura de que sea booleano
  amount: number;
}

interface AddExpenseModalProps {
  closeModal: () => void;
  addExpense: (newExpense: Expense) => void;
}

const AddExpenseModal: React.FC<AddExpenseModalProps> = ({ closeModal, addExpense }) => {
  const [date, setDate] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [description, setDescription] = useState("");
  const [recurring, setRecurring] = useState(false); // 🔥 Valor inicial en `false`
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");

  // 🔥 Obtener `user_id` desde localStorage o contexto
  const userId = JSON.parse(sessionStorage.getItem("usuario") || "{}").id || null;


  const handleSave = async () => {
    if (!date || amount <= 0 || description.trim() === "" || categoryId === 0) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    

    const newExpense: Expense = {
      id: Date.now(),
      user_id: userId,
      date,
      category_id: categoryId,
      description,
      recurring: !!recurring, // 🔥 Asegura que siempre sea `true` o `false`
      amount,
    };

    addExpense(newExpense);
    closeModal();
  };

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show d-block" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Agregar Gasto</h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              {error && <div className="alert alert-danger">{error}</div>}

              <label className="form-label">Fecha</label>
              <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />

              <label className="form-label mt-2">Categoría</label>
              <select className="form-select" value={categoryId} onChange={(e) => setCategoryId(Number(e.target.value))}>
                <option value={0}>----- Seleccionar -----</option>
                <option value={1}>Servicios</option>
                <option value={2}>Alimentación</option>
                <option value={3}>Ocio</option>
              </select>

              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={recurring}
                  onChange={() => setRecurring((prev) => !prev)} // 🔥 Cambia entre `true` y `false`
                />
                <label className="form-check-label">Recurrente</label>
              </div>

              <label className="form-label mt-2">Descripción</label>
              <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Escriba aquí el detalle"></textarea>

              <label className="form-label mt-2">Monto</label>
              <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddExpenseModal;
