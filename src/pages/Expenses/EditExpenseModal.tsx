import { useState } from "react";
import styles from "./Expenses.module.css";

interface Expense {
  id: number;
  date: string;
  category: string;
  description: string;
  recurring: boolean;
  amount: number;
}

interface EditExpenseModalProps {
  expense: Expense;
  closeModal: () => void;
  updateExpense: (updatedExpense: Expense) => void;
}

const EditExpenseModal: React.FC<EditExpenseModalProps> = ({ expense, closeModal, updateExpense }) => {
  const [date, setDate] = useState(expense.date);
  const [category, setCategory] = useState(expense.category);
  const [description, setDescription] = useState(expense.description);
  const [recurring, setRecurring] = useState(expense.recurring);
  const [amount, setAmount] = useState(expense.amount);

  const handleSave = () => {
    const updatedExpense = { ...expense, date, category, description, recurring, amount };
    updateExpense(updatedExpense);
    closeModal();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Editar Gasto</h2>

        <label>Fecha</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={styles.input} />

        <label>Categoría</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.select}>
          <option value="Servicios">Servicios</option>
          <option value="Alimentación">Alimentación</option>
          <option value="Ocio">Ocio</option>
        </select>

        <div className={styles.checkboxContainer}>
          <input type="checkbox" checked={recurring} onChange={() => setRecurring(!recurring)} className={styles.checkbox} />
          <label>Recurrente</label>
        </div>

        <label>Descripción</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className={styles.textarea}></textarea>

        <label>Monto</label>
        <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} className={styles.input} />

        <div className={styles.modalActions}>
          <button className={styles.cancelButton} onClick={closeModal}>Cancelar</button>
          <button className={styles.saveButton} onClick={handleSave}>Aceptar</button>
        </div>
      </div>
    </div>
  );
};

export default EditExpenseModal;
