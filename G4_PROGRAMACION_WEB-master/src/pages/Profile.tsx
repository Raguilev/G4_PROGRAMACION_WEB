import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar/user_sidebar";
import EditProfileModal from "../components/modales/EditProfileModal";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ name: string; email: string; password: string } | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("usuario");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const updateUser = (updatedUser: { name: string; email: string; password: string }) => {
    setUser(updatedUser);
    sessionStorage.setItem("usuario", JSON.stringify(updatedUser));
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
        {showModal && <EditProfileModal user={user!} showModal={showModal} closeModal={() => setShowModal(false)} updateUser={updateUser} />}

      </div>
    </div>
  );
};

export default Profile;

