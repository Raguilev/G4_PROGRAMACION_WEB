import styles from "./Expenses.module.css";

interface Expense {
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

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, openEdit, openDelete }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.expenseTable}>
        <thead>
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
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>{expense.recurring ? "Sí" : "No"}</td>
                <td>S/. {expense.amount.toFixed(2)}</td>
                <td className={styles.actions}>
                  <button className={styles.editButton} onClick={() => openEdit(expense)}>✏️</button>
                  <button className={styles.deleteButton} onClick={() => openDelete(expense.id)}>🗑️</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className={styles.noData}>No hay gastos registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
