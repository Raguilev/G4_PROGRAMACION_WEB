import { useState } from "react";
import Sidebar from "../components/sidebar/user_sidebar";
import AddBudgetModal from "../components/modales/AddBudgetModal";
import EditBudgetModal from "../components/modales/EditBudgetModal";
import DeleteBudgetModal from "../components/modales/DeleteBudgetModal";

const Presupuestos = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedBudget, setSelectedBudget] = useState<{ category: string; amount: number } | null>(null);

  return (
    <div className="container-fluid bg-light">
      <Sidebar />
      <div className="col-md-9 col-lg-10 py-4">
        <h2 className="mb-4">Mis Presupuestos</h2>

        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>Agregar</button>
        </div>

        <table className="table table-hover table-bordered">
          <thead className="table-primary">
            <tr>
              <th>Categoría</th>
              <th>Monto</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ocio</td>
              <td>S/. 129.99</td>
              <td>
                <button className="btn btn-light" onClick={() => { setSelectedBudget({ category: "Ocio", amount: 129.99 }); setShowEditModal(true); }}>✏️</button>
                <button className="btn btn-light text-danger" onClick={() => setShowDeleteModal(true)}>🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {showAddModal && <AddBudgetModal closeModal={() => setShowAddModal(false)} addBudget={() => {}} />}
      {showEditModal && selectedBudget && <EditBudgetModal closeModal={() => setShowEditModal(false)} budget={selectedBudget} updateBudget={() => {}} />}
      {showDeleteModal && <DeleteBudgetModal closeModal={() => setShowDeleteModal(false)} deleteBudget={() => {}} />}
    </div>
  );
};

export default Presupuestos;

