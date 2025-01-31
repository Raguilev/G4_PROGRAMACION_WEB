import Sidebar from "../components/sidebar/user_sidebar"
import GraficoGastoMensual from "../components/graficos/GraficoGastoMensual"
import GraficoGastoCategoria from "../components/graficos/GraficoGastoCategoria"

const DashboardUsuarioPage = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="row">
                {/* Sidebar */}
                <div className="col-md-3 col-lg-2 shadow-sm vh-100">
                    <Sidebar />
                </div>

                {/* Contenido Principal */}
                <div className="col-md-9 col-lg-10 py-4 d-flex flex-column">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="fw-bold mb-3">Gastos mensuales</h3>
                                <div className="card p-3 shadow-sm">
                                    <GraficoGastoMensual />
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <h3 className="fw-bold mb-3">Gastos por categoría</h3>
                                <div className="card p-3 shadow-sm">
                                    <GraficoGastoCategoria />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardUsuarioPage;
