import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TablaGastos from "../components/TablaGastos";
import ModalEditarGastos from "../components/ModalEditarGastos";
import ModalFiltrarGastos from "../components/ModalFiltrarGastos";

const Gastos = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [gastoSeleccionado, setGastoSeleccionado] = useState<any>(null);

    const openEditModal = (gasto: any) => {
        setGastoSeleccionado(gasto);
        setShowEditModal(true);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                
                {/* Sidebar */}
                <div className="col-md-3">
                    <Sidebar />
                </div>

                {/* Contenido Principal */}
                <div className="col-md-9 py-4">
                    
                    {/* Sección de Gestión de Gastos */}
                    <section className="mb-4">
                        <h3 className="fw-bold mb-3">Gestión de Gastos</h3>
                        <div className="card p-3 shadow-sm">
                            
                            {/* Botones de acciones */}
                            <div className="d-flex justify-content-end gap-2 mb-3">
                                <button className="btn btn-primary" onClick={() => setShowFilterModal(true)}>
                                    <i className="bi bi-funnel"></i> Filtrar
                                </button>
                                <button className="btn btn-secondary">
                                    <i className="bi bi-download"></i> Exportar
                                </button>
                                <button className="btn btn-success">
                                    <i className="bi bi-plus"></i> Agregar
                                </button>
                            </div>

                            {/* Tabla de Gastos */}
                            <TablaGastos openEditModal={openEditModal} />
                        </div>
                    </section>
                </div>
            </div>

            {/* Modales */}
            {showEditModal && <ModalEditarGastos showModal={showEditModal} closeModal={() => setShowEditModal(false)} gasto={gastoSeleccionado} />}
            {showFilterModal && <ModalFiltrarGastos showModal={showFilterModal} closeModal={() => setShowFilterModal(false)} />}
        </div>
    );
};

export default Gastos;
