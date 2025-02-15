interface DeleteExpenseModalProps {
  closeModal: () => void;
  deleteExpense: () => void;
}

const DeleteExpenseModal: React.FC<DeleteExpenseModalProps> = ({ closeModal, deleteExpense }) => {
  return (
    <>
    <div className="modal-backdrop fade show"></div>
    <div className="modal fade show d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">¡Aviso!</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body text-center">
            <p>¿Está seguro de que desea eliminar este registro?</p>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>No</button>
            <button type="button" className="btn btn-primary" onClick={deleteExpense}>Sí</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DeleteExpenseModal;