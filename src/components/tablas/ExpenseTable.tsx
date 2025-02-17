import "bootstrap/dist/css/bootstrap.min.css";

export interface Expense {
  id: number;
  date: string;
  category: string;
  description: string;
  recurring: boolean;
  amount: number;
}

interface ExpenseTableProps {
  expenses: Expense[];
  openEdit: (expense: Expense) => void;
  openDelete: (expenseId: number) => void;
}

const ExpenseTable: React.FC<ExpenseTableProps> = (props: ExpenseTableProps) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-primary text-center">
          <tr>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Recurrente</th>
            <th>Monto</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {props.expenses.length > 0 ? (
            props.expenses.map((expense : Expense) => (
              <tr key={expense.id} className="text-center">
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                <td className="text-start">{expense.description}</td>
                <td>
                  <span className={`badge ${expense.recurring ? "bg-success" : "bg-secondary"}`}>
                    {expense.recurring ? "Sí" : "No"}
                  </span>
                </td>
                <td><strong>S/. {expense.amount.toFixed(2)}</strong></td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => props.openEdit(expense)}>
                    ✏️
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => props.openDelete(expense.id)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center text-muted">No hay gastos registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
