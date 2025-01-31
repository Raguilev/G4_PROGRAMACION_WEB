interface ModalFiltrarGastosProps {
    showModal: boolean;
    closeModal: () => void;
}

const ModalFiltrarGastos = ({ showModal, closeModal }: ModalFiltrarGastosProps) => {
    return (
        <div>
            {/* Fondo oscuro cuando el modal está activo */}
            {showModal && <div className="modal-backdrop fade show"></div>}

            <div className={`modal fade ${showModal ? "show d-block" : ""}`} tabIndex={-1} role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4 rounded-4 shadow-lg">
                        
                        {/* Encabezado del modal */}
                        <div className="modal-header border-0">
                            <h3 className="modal-title fw-bold text-center w-100">Filtros de tabla</h3>
                            <button type="button" className="btn-close" onClick={closeModal}></button>
                        </div>

                        {/* Cuerpo del modal */}
                        <div className="modal-body">
                            <form>
                                {/* Rango */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Rango</label>
                                    <div className="d-flex gap-2 justify-content-center">
                                        <input type="number" className="form-control text-center" placeholder="Min" style={{ maxWidth: "80px" }} />
                                        <span className="align-self-center">a</span>
                                        <input type="number" className="form-control text-center" placeholder="Max" style={{ maxWidth: "80px" }} />
                                    </div>
                                </div>

                                {/* Fecha */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Fecha</label>
                                    <input type="date" className="form-control text-center" defaultValue="2024-12-05" />
                                </div>

                                {/* Categoría */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Categoría</label>
                                    <select className="form-select text-center">
                                        <option value="Servicios">Servicios</option>
                                        <option value="Alimentos">Alimentos</option>
                                        <option value="Transporte">Transporte</option>
                                    </select>
                                </div>
                            </form>
                        </div>

                        {/* Footer con botones alineados correctamente */}
                        <div className="modal-footer border-0 d-flex justify-content-between">
                            <button type="button" className="btn btn-secondary px-4 py-2" onClick={closeModal}>
                                Cancelar
                            </button>
                            <button type="submit" className="btn btn-primary px-4 py-2">
                                Aceptar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalFiltrarGastos;
