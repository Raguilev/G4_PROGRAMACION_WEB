import Sidebar from "../components/Sidebar"
import GraficoGastoMensual from "../components/GraficoGastoMensual"
import GraficoGastoCategoria from "../components/GraficoGastoCategoria"
const DashboardUsuarioPage = () => {
    return <div className="container-fluid">
            <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>

            <div className="col-md-9 py-4">
                <section className="mb-4">
                <h3 className="fw-bold mb-3">Gastos mensuales</h3>
                <div className="card p-3 shadow-sm h-10">
                <GraficoGastoMensual />
                </div>
                </section>
                <section>
                <h3 className="fw-bold mb-3">Gastos por categoría</h3>
                <div className="card p-3 shadow-sm">
                <GraficoGastoCategoria />
                </div>
                </section>
            </div>
            </div>
        </div>
}
export default DashboardUsuarioPage