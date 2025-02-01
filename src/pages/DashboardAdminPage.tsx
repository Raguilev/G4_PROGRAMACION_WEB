import GraficoUsuarios from "../components/graficos/GraficoUsuarios";
import Sidebar from "../components/sidebar/admin_sidebar";

const DashboardAdminPage = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row">

        <div className="col-md-3 col-lg-2 vh-100">
          <Sidebar />
        </div>

        <div className="col-md-9 col-lg-10 py-4">
          <div className="container">
            <h2 className="mb-4">Dashboards</h2>

            <div className="row mb-4">
              <div className="col-md-5">
                <div className="card p-4 bg-white shadow-sm text-center">
                  <h4 className="mb-3">Usuarios Totales</h4>
                  <h1 className="display-4">12</h1>
                </div>
              </div>
            </div>

            <div className="card p-4 bg-white shadow-sm">
              <h4 className="mb-4">Usuarios nuevos por mes</h4>
              <GraficoUsuarios />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdminPage;
