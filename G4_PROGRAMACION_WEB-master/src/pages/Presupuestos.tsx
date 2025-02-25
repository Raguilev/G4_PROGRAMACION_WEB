import { useState } from "react";
import Sidebar from "../components/sidebar/user_sidebar";
import PresupuestosTable from "../components/tablas/PresupuestosTable";
import AddBudgetModal from "../components/modales/AddBudgetModal";
import EditBudgetModal from "../components/modales/EditBudgetModal";
import DeleteBudgetModal from "../components/modales/DeleteBudgetModal";

interface Budget {
  category: string;
  amount: number;
}

const initialBudgets: Budget[] = [
  { category: "Ocio", amount: 139.99 },
  { category: "Servicios", amount: 1229.99 },
  { category: "Alimentación", amount: 779.99 },
];

const Presupuestos = () => {
  const [budgets, setBudgets] = useState<Budget[]>(initialBudgets);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<Budget | null>(null);

  const handleAddBudget = (category: string, amount: number) => {
    const newBudget = { category, amount };
    setBudgets([...budgets, newBudget]);
  };

  const handleUpdateBudget = (category: string, amount: number) => {
    setBudgets(
      budgets.map((b) =>
        b.category === selectedBudget?.category ? { category, amount } : b
      )
    );
    setShowEditModal(false);
  };

  const handleDeleteBudget = () => {
    if (selectedBudget) {
      setBudgets(budgets.filter((b) => b.category !== selectedBudget.category));
      setShowDeleteModal(false);
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
              setSelectedBudget(budget);
              setShowEditModal(true);
            }}
            openDelete={(budget) => {
              setSelectedBudget(budget);
              setShowDeleteModal(true);
            }}
          />

          {/* Modales */}
          {showAddModal && (
            <AddBudgetModal closeModal={() => setShowAddModal(false)} addBudget={handleAddBudget} />
          )}

          {showEditModal && selectedBudget && (
            <EditBudgetModal
              closeModal={() => setShowEditModal(false)}
              budget={selectedBudget}
              updateBudget={handleUpdateBudget}
            />
          )}

          {showDeleteModal && selectedBudget && (
            <DeleteBudgetModal closeModal={() => setShowDeleteModal(false)} deleteBudget={handleDeleteBudget} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Presupuestos;
