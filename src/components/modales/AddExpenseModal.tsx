import { useState } from "react";

interface Expense {
  id: number;
  date: string;
  category: string;
  description: string;
  recurring: boolean;
  amount: number;
}

interface AddExpenseModalProps {
  closeModal: () => void;
  addExpense: (newExpense: Expense) => void;
}

const AddExpenseModal: React.FC<AddExpenseModalProps> = ({ closeModal, addExpense }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Servicios");
  const [description, setDescription] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleSave = () => {
    const newExpense = {
      id: Date.now(),
      date,
      category,
      description,
      recurring,
      amount,
    };
    addExpense(newExpense);
    closeModal();
  };

  return (
    <div className="modal fade show d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Gasto</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <label className="form-label">Fecha</label>
            <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
            
            <label className="form-label mt-2">Categoría</label>
            <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Servicios">Servicios</option>
              <option value="Alimentación">Alimentación</option>
              <option value="Ocio">Ocio</option>
            </select>

            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" checked={recurring} onChange={() => setRecurring(!recurring)} />
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
  );
};

export default AddExpenseModal;