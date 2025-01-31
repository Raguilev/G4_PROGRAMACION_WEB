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
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Agregar Gasto</h2>

        <label>Fecha</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={styles.input} />

        <label>Categoría</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.select}>
          <option value="Servicios">Servicios</option>
          <option value="Alimentación">Alimentación</option>
          <option value="Ocio">Ocio</option>
        </select>

        <div className={styles.checkboxContainer}>
          <label>Recurrente</label>
          <input type="checkbox" checked={recurring} onChange={() => setRecurring(!recurring)} className={styles.checkbox} />
          
        </div>

        <label>Descripción</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className={styles.textarea} placeholder="Escriba aquí el detalle"></textarea>

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

export default AddExpenseModal;
