import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("usuario");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <>
      <div className="d-flex flex-column bg-white vh-100 p-3 border-end shadow-sm">
        {user && (
          <>
            <div className="text-center mb-4">
              <img
                src="/assets_admin/cara_admin.png"
                alt="User"
                className="rounded-circle border shadow-sm mb-2"
                width="80"
                height="80"
              />
              <h5 className="fw-bold">{user.name}</h5>
              <p className="text-muted small">{user.email}</p>
            </div>


            <nav className="nav flex-column">
              <Link
                to="/admin_dashboard"
                className={`nav-link py-2 d-flex align-items-center ${
                  location.pathname === "/admin_dashboard" ? "active text-white bg-primary rounded" : "text-dark"
                }`}
              >
                <img src="/assets_admin/grafico.png" alt="Dashboard" width="20" className="me-2" /> Dashboard
              </Link>

              <Link
                to="/usuarios"
                className={`nav-link py-2 d-flex align-items-center ${
                  location.pathname === "/usuarios" ? "active text-white bg-primary rounded" : "text-dark"
                }`}
              >
                <img src="/assets_admin/historial.png" alt="Usuarios" width="20" className="me-2" /> Usuarios
              </Link>

              <Link
                to="/historial"
                className={`nav-link py-2 d-flex align-items-center ${
                  location.pathname === "/historial" ? "active text-white bg-primary rounded" : "text-dark"
                }`}
              >
                <img src="/assets_admin/historial.png" alt="Historial" width="20" className="me-2" /> Historial
              </Link>

              <Link
                to="/profile"
                className={`nav-link py-2 d-flex align-items-center ${
                  location.pathname === "/profile" ? "active text-white bg-primary rounded" : "text-dark"
                }`}
              >
                <img src="/assets_admin/configuracion.png" alt="Configuración" width="20" className="me-2" /> Configuración
              </Link>

              <button
                className="nav-link py-2 text-danger border-0 bg-transparent text-start d-flex align-items-center mt-3"
                data-bs-toggle="modal"
                data-bs-target="#logoutModal"
              >
                <img src="/assets_admin/salida.png" alt="Salir" width="20" className="me-2" /> Salir
              </button>
            </nav>
          </>
        )}
      </div>

      <div className="modal fade" id="logoutModal" tabIndex={-1} aria-labelledby="logoutModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="logoutModalLabel">¡Aviso!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ¿Está seguro de que desea cerrar sesión?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
              <button type="button" className="btn btn-primary" onClick={handleLogout}>Sí</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
