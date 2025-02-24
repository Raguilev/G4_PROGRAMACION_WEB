interface DeleteBudgetModalProps {
    closeModal: () => void;
    deleteBudget: () => void;
  }
  
  const DeleteBudgetModal: React.FC<DeleteBudgetModalProps> = ({ closeModal, deleteBudget }) => {
    return (
      <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal show d-block">
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content p-4 rounded-4 shadow-lg text-center">
            <div className="modal-header border-0">
              <h3 className="modal-title fw-bold w-100">Aviso!</h3>
            </div>
            <div className="modal-body">
              <p>¿Está seguro de que desea eliminar este registro?</p>
            </div>
            <div className="modal-footer border-0 d-flex justify-content-between">
              <button className="btn btn-secondary px-4 py-2" onClick={closeModal}>No</button>
              <button className="btn btn-primary px-4 py-2" onClick={deleteBudget}>Sí</button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default DeleteBudgetModal;
  