import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const UserSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

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
      <div className="d-flex flex-column bg-light vh-100 p-3 border-end">
        {user && (
          <>
            <div className="text-center mb-4">
              <img src="/assets/cara.png" alt="User" className="rounded-circle mb-2" width="60" height="60" />
              <h6 className="fw-bold">{user.name}</h6>
              <p className="text-muted small">{user.email}</p>
            </div>

            <nav className="nav flex-column">
              <Link to="/dashboard" className={`nav-link py-2 d-flex align-items-center ${location.pathname === "/dashboard" ? "active text-white bg-primary rounded" : "text-dark"}`}>
                <img src="/assets/grafico.png" alt="Dashboard" width="20" className="me-2" /> Dashboard
              </Link>
              <Link to="/expenses" className={`nav-link py-2 d-flex align-items-center ${location.pathname === "/expenses" ? "active text-white bg-primary rounded" : "text-dark"}`}>
                <img src="/assets/gasto.png" alt="Gastos" width="20" className="me-2" /> Gastos
              </Link>
              <Link to="/budgets" className={`nav-link py-2 d-flex align-items-center ${location.pathname === "/budgets" ? "active text-white bg-primary rounded" : "text-dark"}`}>
                <img src="/assets/money.png" alt="Presupuestos" width="20" className="me-2" /> Presupuestos
              </Link>
              <Link to="/profile" className={`nav-link py-2 d-flex align-items-center ${location.pathname === "/profile" ? "active text-white bg-primary rounded" : "text-dark"}`}>
                <img src="/assets/configuracion.png" alt="Configuración" width="20" className="me-2" /> Configuración
              </Link>
              <button className="nav-link py-2 text-danger border-0 bg-transparent text-start d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#logoutModal">
                <img src="/assets/salida.png" alt="Salir" width="20" className="me-2" /> Salir
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

export default UserSidebar;
