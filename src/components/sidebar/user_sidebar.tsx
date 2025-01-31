import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

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
    <aside className="sidebar">
      {user && (
        <>
          <img src="/cara.png" alt="User Image" className="profilePic" />
          <nav>
            <Link to="/dashboard" className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""}`}>
              <img src="/assets/grafico.png" width="20" className="me-2" alt="Dashboard" /> Dashboard
            </Link>
            <Link to="/expenses" className={`nav-link ${location.pathname === "/expenses" ? "active" : ""}`}>
              <img src="/assets/gasto.png" width="20" className="me-2" alt="Gastos" /> Gastos
            </Link>
            <Link to="/budgets" className={`nav-link ${location.pathname === "/budgets" ? "active" : ""}`}>
              <img src="/assets/money.png" width="20" className="me-2" alt="Presupuestos" /> Presupuestos
            </Link>
            <Link to="/profile" className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}>
              <img src="/assets/configuracion.png" width="20" className="me-2" alt="Configuración" /> Configuración
            </Link>
            <button className="logoutButton" onClick={handleLogout}>
              <img src="/assets/salida.png" width="20" className="me-2" alt="Salir" /> Salir
            </button>
          </nav>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
