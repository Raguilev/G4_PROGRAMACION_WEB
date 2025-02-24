import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar/user_sidebar";
import EditProfileModal from "../components/modales/EditProfileModal";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ name: string; email: string; password: string } | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const nombre = sessionStorage.getItem("nombre") || "";
    const email = sessionStorage.getItem("email") || "";
    const password = sessionStorage.getItem("password") || "";

    console.log("🔹 Verificando sessionStorage en Profile:", nombre, email);

    if (nombre) {
      setUser({ name: nombre, email, password });
    } else {
      setTimeout(() => {
        console.log("🔹 No hay usuario. Redirigiendo a login...");
        navigate("/");
      }, 500);
    }
  }, [navigate]);

  const updateUser = (updatedUser: { name: string; email: string; password: string }) => {
    if (updatedUser.name && updatedUser.email) {
      setUser(updatedUser);
      sessionStorage.setItem("nombre", updatedUser.name);
      sessionStorage.setItem("email", updatedUser.email);
      sessionStorage.setItem("password", updatedUser.password);
      console.log("🔹 Usuario actualizado:", updatedUser);
    } else {
      console.error("⚠️ Error: Datos de usuario inválidos.");
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container mt-4">
        <h2 className="mb-4">Mi perfil</h2>
        {user && (
          <div className="card p-4 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="mb-0">Información personal</h3>
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Editar
              </button>
            </div>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Correo electrónico:</strong> {user.email}</p>
            <p><strong>Contraseña:</strong> {user.password}</p>
          </div>
        )}
        {showModal && (
          <EditProfileModal 
            user={user!} 
            showModal={showModal} 
            closeModal={() => setShowModal(false)} 
            updateUser={updateUser} 
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
