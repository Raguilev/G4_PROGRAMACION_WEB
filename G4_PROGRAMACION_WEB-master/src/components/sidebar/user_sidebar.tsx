import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoutModal from "../modales/ModalCerrarSesion";

const UserSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<{ name: string; email: string;role: string } | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Estado para mostrar el modal

  useEffect(() => {
    const storedUser = sessionStorage.getItem("usuario");
  
    console.log("🔹 Verificando sessionStorage en UserSidebar:", storedUser);
  
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser({
        name: parsedUser.nombre,
        email: parsedUser.email,
        role: parsedUser.role
      });
    } else {
      setTimeout(() => {
        console.log("🔹 No hay usuario. Redirigiendo a login...");
        navigate("/");
      }, 500);
    }
  }, [navigate]);
  

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: "/assets_usuario/grafico_usuario.png" },
    { path: "/expenses", label: "Gastos", icon: "/assets_usuario/gasto.png" },
    { path: "/budgets", label: "Presupuestos", icon: "/assets_usuario/money.png" },
    { path: "/profile", label: "Configuración", icon: "/assets_usuario/configuracion_usuario.png" }
  ];

  const handleLogout = () => {
    console.log("🔹 Cerrando sesión..."); // 📌 Depuración
    sessionStorage.clear(); // ✅ Borra todos los datos del usuario en sessionStorage
    navigate("/");
  };

  return (
    <>
      <div className="d-flex flex-column bg-white vh-100 p-3 border-end shadow-sm">
        {user && (
          <>
            <div className="text-center mb-4">
              <img
                src="/assets_usuario/cara_usuario.png"
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
                onClick={() => setShowLogoutModal(true)} // Muestra el modal al hacer clic
              >
                <img src="/assets_usuario/salida_usuario.png" alt="Salir" width="20" className="me-2" />
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

export default UserSidebar;
