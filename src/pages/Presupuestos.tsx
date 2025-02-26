import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar/user_sidebar";
import PresupuestosTable from "../components/tablas/PresupuestosTable";
import AddBudgetModal from "../components/modales/AddBudgetModal";
import EditBudgetModal from "../components/modales/EditBudgetModal";
import DeleteBudgetModal from "../components/modales/DeleteBudgetModal";

interface Budget {
  id: number;
  category_id: number;
  category: string;
  monthly_budget: number;
}
//Todo bien
const API_URL = "http://localhost:5000/budgets";
//Bien
const Presupuestos = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<Budget | null>(null);
//Bien
  const userId = 1; // ⚠️ Asegurar que `userId` sea dinámico si usas autenticación

  useEffect(() => {
    fetchBudgets();
  }, []);
//Bien
const fetchBudgets = async () => {
  try {
    const response = await fetch(`${API_URL}/${userId}`);
    const data = await response.json();

    setBudgets(
      data.budgets.map((b: any) => ({
        id: b.id,
        category_id: b.category_id ?? 0, // 🔹 Asegurar que `category_id` existe
        category: b.Category?.name || "Desconocido", // 🔹 Evitar errores si `Category` es null
        monthly_budget: b.monthly_budget,
      }))
    );
  } catch (error) {
    console.error("❌ Error cargando presupuestos:", error);
  }
};
  // ✅ Agregar presupuesto
  const handleAddBudget = async (category_id: number, monthly_budget: number) => {
    try {
      await fetch(`${API_URL}/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category_id, monthly_budget }),
      });
      setShowAddModal(false);
      fetchBudgets();
    } catch (error) {
      console.error("❌ Error agregando presupuesto:", error);
    }
  };

  // ✅ Actualizar presupuesto
  const handleUpdateBudget = async (id: number, category_id: number, monthly_budget: number) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category_id, monthly_budget }),
      });
      setShowEditModal(false);
      fetchBudgets();
    } catch (error) {
      console.error("❌ Error actualizando presupuesto:", error);
    }
  };

  // ✅ Eliminar presupuesto
  const handleDeleteBudget = async (id: number) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setShowDeleteModal(false);
      fetchBudgets();
    } catch (error) {
      console.error("❌ Error eliminando presupuesto:", error);
    }
  };

  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-md-2 vh-100 bg-light">
          <Sidebar />
        </div>
        <div className="col-md-10 p-4">
          <h2 className="mb-4">Mis Presupuestos</h2>

          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
              Agregar
            </button>
          </div>

          <PresupuestosTable
            budgets={budgets}
            openEdit={(budget) => {
              setSelectedBudget({
                ...budget,
                category_id: budget.category_id ?? 0, // 🔹 Asegurar `category_id`
              });
              setShowEditModal(true);
            }}
            openDelete={(budget) => {
              setSelectedBudget(budget);
              setShowDeleteModal(true);
            }}
          />

          {/* Modales */}
          {showAddModal && (
            <AddBudgetModal
              closeModal={() => setShowAddModal(false)}
              onBudgetAdded={fetchBudgets}
              userId={userId}
            />
          )}

          {showEditModal && selectedBudget && (
            <EditBudgetModal
              closeModal={() => setShowEditModal(false)}
              budget={selectedBudget}
              onBudgetUpdated={fetchBudgets}
            />
          )}

          {showDeleteModal && selectedBudget && (
            <DeleteBudgetModal
              closeModal={() => setShowDeleteModal(false)}
              budgetId={selectedBudget.id}
              onBudgetDeleted={fetchBudgets}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Presupuestos;
