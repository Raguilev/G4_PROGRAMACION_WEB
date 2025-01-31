interface ModalEditarGastosProps {
    showModal: boolean;
    closeModal: () => void;
    gasto: any;
}

const ModalEditarGastos = ({ showModal, closeModal, gasto }: ModalEditarGastosProps) => {
    return (
        <div>
            {/* Fondo oscuro cuando el modal está activo */}
            {showModal && <div className="modal-backdrop fade show"></div>}

            <div className={`modal fade ${showModal ? "show d-block" : ""}`} tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-5 p-4">
                        
                        {/* Encabezado del modal */}
                        <div className="modal-header">
                            <h5 className="modal-title">Editar Gasto</h5>
                            <button type="button" className="btn-close" onClick={closeModal}></button>
                        </div>

                        {/* Cuerpo del modal */}
                        <div className="modal-body">
                            <form>
                                {/* Fecha */}
                                <div className="mb-3">
                                    <label className="form-label">Fecha</label>
                                    <input type="date" className="form-control" defaultValue={gasto?.fecha} />
                                </div>

                                {/* Categoría */}
                                <div className="mb-3">
                                    <label className="form-label">Categoría</label>
                                    <select className="form-select" defaultValue={gasto?.categoria}>
                                        <option value="Ocio">Ocio</option>
                                        <option value="Servicios">Servicios</option>
                                        <option value="Alimentación">Alimentación</option>
                                    </select>
                                </div>

                                {/* Descripción */}
                                <div className="mb-3">
                                    <label className="form-label">Descripción</label>
                                    <textarea className="form-control">{gasto?.descripcion}</textarea>
                                </div>
                            </form>
                        </div>

                        {/* Footer con botones alineados correctamente */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
                            <button type="button" className="btn btn-primary">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalEditarGastos;
