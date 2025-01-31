import { useState } from "react";

interface EditBudgetModalProps {
  closeModal: () => void;
  budget: { category: string; amount: number };
  updateBudget: (category: string, amount: number) => void;
}

const EditBudgetModal: React.FC<EditBudgetModalProps> = ({ closeModal, budget, updateBudget }) => {
  const [category, setCategory] = useState(budget.category);
  const [amount, setAmount] = useState(budget.amount.toString());

  const handleSave = () => {
    if (!amount) return;
    updateBudget(category, parseFloat(amount));
    closeModal();
  };

  return (
    <div className="modal show d-block">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content p-4 rounded-4 shadow-lg">
          <div className="modal-header border-0">
            <h3 className="modal-title fw-bold text-center w-100">Editar Presupuesto</h3>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Categoría</label>
                <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Servicios">Servicios</option>
                  <option value="Alimentación">Alimentación</option>
                  <option value="Ocio">Ocio</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Monto</label>
                <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
              </div>
            </form>
          </div>
          <div className="modal-footer border-0 d-flex justify-content-between">
            <button className="btn btn-secondary px-4 py-2" onClick={closeModal}>Cancelar</button>
            <button className="btn btn-primary px-4 py-2" onClick={handleSave}>Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBudgetModal;
