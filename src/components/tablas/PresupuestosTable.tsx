import React from "react";

interface Budget {
  category: string;
  amount: number;
}

interface PresupuestosTableProps {
  budgets: Budget[];
  openEdit: (budget: Budget) => void;
  openDelete: (budget: Budget) => void;
}

const PresupuestosTable: React.FC<PresupuestosTableProps> = ({ budgets, openEdit, openDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Categoría</th>
            <th>Monto</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {budgets.length > 0 ? (
            budgets.map((budget, index) => (
              <tr key={index}>
                <td>{budget.category}</td>
                <td>S/. {budget.amount.toFixed(2)}</td>
                <td>
                  <button className="btn btn-light" onClick={() => openEdit(budget)}>✏️</button>
                  <button className="btn btn-light text-danger" onClick={() => openDelete(budget)}>🗑️</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center">No hay presupuestos registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PresupuestosTable;
