import GraficoUsuarios from "../components/GraficoUsuarios"
import Sidebar from "../components/Sidebar"
const DashboardAdminPage = () =>{
    return <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>

                <div className="col-md-9 py-4">
                    <h2 className="mb-4">Dashboard</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card p-4">
                                <h5>Usuarios Totales</h5>
                                <h3 className="display-4">12</h3>
                            </div>
                        </div>
                    </div>

                    <div className="chart-container">
                        <canvas id="userChart"></canvas>
                    </div>
                    <div className="card p-3 shadow-sm">
                    <GraficoUsuarios/>
                </div>
                </div>
            </div>
        </div>
}
export default DashboardAdminPage