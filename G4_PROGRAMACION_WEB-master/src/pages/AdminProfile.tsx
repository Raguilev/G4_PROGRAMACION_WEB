import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/sidebar/admin_sidebar"; 
import EditProfileModal from "../components/modales/EditProfileModal";

const AdminProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ name: string; email: string; password: string } | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("usuario");
  
    console.log("🔹 Verificando sessionStorage en AdminProfile:", storedUser); // 📌 Depuración
  
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setTimeout(() => {
        console.log("🔹 No hay usuario. Redirigiendo a login...");
        navigate("/");
      }, 500); // 🔹 Espera 500ms antes de redirigir
    }
  }, [navigate]);
  

  const updateUser = (updatedUser: { name: string; email: string; password: string }) => {
    if (updatedUser.name && updatedUser.email) { // ✅ Verifica que no sean vacíos antes de guardar
      setUser(updatedUser);
      sessionStorage.setItem("usuario", JSON.stringify(updatedUser));
      console.log("🔹 Usuario actualizado:", updatedUser);
    } else {
      console.error("⚠️ Error: Datos de usuario inválidos.");
    }
  };
  

  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="container mt-4">
        <h2 className="mb-4">Mi Perfil (Administrador)</h2>
        {user && (
          <div className="card p-4 shadow-sm rounded-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="mb-0">Información Personal</h3>
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Editar
              </button>
            </div>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Correo Electrónico:</strong> {user.email}</p>
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

export default AdminProfile;
