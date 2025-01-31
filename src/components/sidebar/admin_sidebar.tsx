import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "../../styles/sidebar.module.css";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtiene la ruta actual
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
    <div className={styles.sidebar}>
      {user && (
        <>
          <img className={styles.profilePic} src="/profile.jpg" alt="User" />
          <h3>{user.name}</h3>
          <p className={styles.email}>{user.email}</p>
          <nav>
            <Link to="/dashboard" className={location.pathname === "/dashboard" ? styles.active : ""}>📊 Dashboard</Link>
            <Link to="/usuarios" className={location.pathname === "/usuarios" ? styles.active : ""}>💰 Usuarios</Link>
            <Link to="/historial" className={location.pathname === "/historial" ? styles.active : ""}>📉 Historial</Link>
            <Link to="/profile" className={location.pathname === "/profile" ? styles.active : ""}>⚙️ Configuración</Link>
            <button className={styles.logoutButton} onClick={handleLogout}>🚪 Salir</button>
          </nav>
        </>
      )}
    </div>
  );
};

export default Sidebar;
