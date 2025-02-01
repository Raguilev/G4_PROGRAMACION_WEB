import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalCerrarSesionAdmin from "../modales/ModalCerrarSesionAdmin";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false)

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
                to="/admin_profile"
                className={`nav-link py-2 d-flex align-items-center ${
                  location.pathname === "/admin_profile" ? "active text-white bg-primary rounded" : "text-dark"
                }`}
              >
                <img src="/assets_admin/configuracion.png" alt="Configuración" width="20" className="me-2" /> Configuración
              </Link>

              <button
                className="nav-link py-2 text-danger border-0 bg-transparent text-start d-flex align-items-center mt-3"
                data-bs-toggle="modal"
                data-bs-target="#logoutModal"
                onClick={()=>setShowModal(true)}
              >
                <img src="/assets_admin/salida.png" alt="Salir" width="20" className="me-2" /> Salir
              </button>
            </nav>
          </>
        )}
      </div>

      <ModalCerrarSesionAdmin showModal={showModal}
                              closeModal={()=>{
                                setShowModal(false)
                              }}
                              confirmLogout={handleLogout}/>

    </>
  );
};

export default AdminSidebar;
