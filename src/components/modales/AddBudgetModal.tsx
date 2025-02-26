import { useState } from "react";

interface AddBudgetModalProps {
  closeModal: () => void;
  onBudgetAdded: () => void; // 🔹 Para recargar la lista después de agregar
  userId: number; // 🔹 Ahora recibe `userId` como prop
}

const API_BASE_URL = "http://localhost:5000/budgets"; // 🔹 Cambié a puerto 5000

const categories = [
  { id: 1, name: "Servicios" },
  { id: 2, name: "Alimentación" },
  { id: 3, name: "Ocio" },
];

const AddBudgetModal: React.FC<AddBudgetModalProps> = ({ closeModal, onBudgetAdded, userId }) => {
  const [categoryId, setCategoryId] = useState<number>(1);
  const [monthlyBudget, setMonthlyBudget] = useState<string>("");

  const handleSave = async () => {
    if (!monthlyBudget || parseFloat(monthlyBudget) <= 0) return;

    try {
      const response = await fetch(`${API_BASE_URL}/${userId}`, { // 🔹 Ahora usa el `userId`
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category_id: categoryId,
          monthly_budget: parseFloat(monthlyBudget),
        }),
      });

      if (!response.ok) throw new Error("Error al agregar presupuesto");

      onBudgetAdded(); // 🔹 Recargar la lista en `Presupuestos.tsx`
      closeModal();
    } catch (error) {
      console.error("❌ Error agregando presupuesto:", error);
    }
  };

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal show d-block">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-4 rounded-4 shadow-lg">
            <div className="modal-header border-0">
              <h3 className="modal-title fw-bold text-center w-100">Agregar Presupuesto</h3>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold">Categoría</label>
                  <select
                    className="form-select"
                    value={categoryId}
                    onChange={(e) => setCategoryId(Number(e.target.value))}
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Monto</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ingresar monto en soles"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(e.target.value)}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer border-0 d-flex justify-content-between">
              <button className="btn btn-secondary px-4 py-2" onClick={closeModal}>
                Cancelar
              </button>
              <button className="btn btn-primary px-4 py-2" onClick={handleSave}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBudgetModal;
