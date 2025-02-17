import { useEffect, useState } from "react";
import GraficoUsuarios from "../components/graficos/GraficoUsuarios";
import Sidebar from "../components/sidebar/admin_sidebar";

interface summary {
  totalUsers: number;
  monthlyData: number[];
}

const DashboardAdminPage = () => {

  const [dashboard, setDashboard ] = useState<summary>()

  const httpObtenerResumen = async () => {
      const url = "http://localhost:5000/users/dashboardAdmin";
      const resp = await fetch(url);
      const data = await resp.json();
      if (data.msg === "") {
        setDashboard(data.summary);
        console.log(data.summary);
      } else {
        console.error(`Error al obtener resumen: ${data.msg}`);
      }
  };

  useEffect(() => {
    httpObtenerResumen();
  }, []);

  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-md-3 col-lg-2">
          <Sidebar />
        </div>

        <div className="col-md-9 col-lg-10 py-4">
          <div className="container">
            <h2 className="mb-4">Dashboards</h2>

            <div className="row mb-4">
              <div className="col-md-6">
                <div className="card p-4 bg-white shadow-sm text-center">
                  <h4 className="mb-3 text-start">Usuarios Totales</h4>
                  <h2>{dashboard ? dashboard.totalUsers : "Cargando..."}</h2>
                </div>
              </div>
            </div>

            <div className="card p-4 bg-white shadow-sm">
              <h4 className="mb-4">Usuarios nuevos por mes</h4>
              {dashboard ? (
                <GraficoUsuarios monthlyData={dashboard.monthlyData} />
              ) : (
                <p>Cargando gráfico...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdminPage;
