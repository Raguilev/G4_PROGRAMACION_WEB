import GraficoUsuarios from "../components/GraficoUsuarios"
import Sidebar from "../components/sidebar/sidebar"

const DashboardAdminPage = () =>{
    return <div className="container-fluid bg-light">
            <div className="row">
                <div className="col-md-3 shadow-sm">
                    <Sidebar/>
                </div>

                <div className="col-md-9 py-4">
                    <h2 className="mb-4">Dashboards</h2>

                    <div className="row mb-4">
                        <div className="col-md-5">
                            <div className="card p-4 bg-white shadow-sm">
                                <h3>Usuarios Totales</h3>
                                <h1 className="text-center">12</h1>
                            </div>
                        </div>
                    </div>

                    <div className="card p-4 bg-white mb-4 shadow-sm">
                        <h3 className="card-tittle mb-4">Usuarios nuevos por mes</h3>
                        <GraficoUsuarios/>
                    </div>
                </div>
            </div>
        </div>
}
export default DashboardAdminPage