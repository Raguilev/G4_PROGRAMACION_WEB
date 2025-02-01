interface ModalCerrarSesionAdminProps{
    showModal: boolean;
    closeModal: () => void;
    confirmLogout: () => void
}
const ModalCerrarSesionAdmin = (props: ModalCerrarSesionAdminProps) =>{

    return(
        <>
            <div className={props.showModal ? "modal fade show d-block" : "modal fade"}>
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">¡Aviso!</h5>
                    <button 
                        type="button" 
                        className="btn-close" 
                        onClick={props.closeModal}
                        aria-label="Close"
                    ></button>
                    </div>
                    <div className="modal-body">
                        ¿Está seguro de que desea cerrar sesión?
                    </div>
                    <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-secondary" 
                        onClick={props.closeModal}
                    >
                        No
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={() => {
                        props.closeModal();
                        props.confirmLogout();
                        }}
                    >
                        Sí
                    </button>
                    </div>
                </div>
                </div>
            </div>

            {props.showModal && (
                <div 
                className="modal-backdrop fade show"
                onClick={props.closeModal}
                ></div>
            )}
            </>     
    )
} 
export default ModalCerrarSesionAdmin