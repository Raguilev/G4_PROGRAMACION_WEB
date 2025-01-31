import styles from "./Expenses.module.css";

interface DeleteExpenseModalProps {
  closeModal: () => void;
  deleteExpense: () => void;
}

const DeleteExpenseModal: React.FC<DeleteExpenseModalProps> = ({ closeModal, deleteExpense }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>¡Aviso!</h2>
        <p>¿Está seguro de que desea eliminar este registro?</p>
        <div className={styles.modalActions}>
          <button className={styles.cancelButton} onClick={closeModal}>No</button>
          <button className={styles.saveButton} onClick={deleteExpense}>Sí</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteExpenseModal;
