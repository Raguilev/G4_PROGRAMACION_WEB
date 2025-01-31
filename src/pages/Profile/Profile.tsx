import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import EditProfileModal from "./EditProfileModal";
import styles from "./Profile.module.css";

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
    <div className="mainLayout">
      <Sidebar />
      <div className="content">
        <div className={styles.profileContainer}>
          <h2>Mi perfil</h2>
          {user && (
            <div className={styles.profileCard}>
              <div className={styles.cardHeader}>
                <h3>Información personal</h3>
                <button className={styles.editButton} onClick={() => setShowModal(true)}>Editar</button>
              </div>
              <p><strong>Nombre:</strong> {user.name}</p>
              <p><strong>Correo electrónico:</strong> {user.email}</p>
              <p><strong>Contraseña:</strong> {user.password}</p>
            </div>
          )}
          {showModal && <EditProfileModal user={user!} closeModal={() => setShowModal(false)} updateUser={updateUser} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
