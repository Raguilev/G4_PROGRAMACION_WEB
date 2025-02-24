import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoutModal from "../modales/ModalCerrarSesion";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Estado para mostrar el modal

  useEffect(() => {
    const nombre = sessionStorage.getItem("nombre") || "";
    const email = sessionStorage.getItem("email") || ""; 
    const role = sessionStorage.getItem("role") || "";

    console.log("🔹 Verificando sessionStorage en AdminSidebar:", nombre, email, role);

    if (nombre) {
      setUser({ name: nombre, email, role }); // ✅ Almacena correctamente el usuario
    } else {
      setTimeout(() => {
        console.log("🔹 No hay usuario. Redirigiendo a login...");
        navigate("/");
      }, 500);
    }
  }, [navigate]);

  const navItems = [
    { path: "/admin_dashboard", label: "Dashboard", icon: "/assets_admin/grafico_admin.png" },
    { path: "/usuarios", label: "Usuarios", icon: "/assets_admin/usuarios.png" },
    { path: "/historial", label: "Historial", icon: "/assets_admin/historial.png" },
    { path: "/admin_profile", label: "Configuración", icon: "/assets_admin/configuracion_admin.png" }
  ];

  const handleLogout = () => {
    console.log("🔹 Cerrando sesión..."); // 📌 Depuración
    sessionStorage.clear(); // ✅ Borra TODO lo almacenado en sessionStorage
    navigate("/"); // ✅ Redirige al login
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
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`nav-link py-2 d-flex align-items-center ${
                    location.pathname === item.path
                      ? "active text-white bg-primary rounded"
                      : "text-dark"
                  }`}
                >
                  <img src={item.icon} alt={item.label} width="20" className="me-2" />
                  {item.label}
                </Link>
              ))}

              <button
                className="nav-link py-2 text-danger border-0 bg-transparent text-start d-flex align-items-center mt-3"
                onClick={() => setShowLogoutModal(true)}
              >
                <img src="/assets_admin/salida_admin.png" alt="Salir" width="20" className="me-2" />
                Salir
              </button>
            </nav>
          </>
        )}
      </div>

      <LogoutModal
        showModal={showLogoutModal}
        closeModal={() => setShowLogoutModal(false)}
        confirmLogout={handleLogout}
      />
    </>
  );
};

export default AdminSidebar;
