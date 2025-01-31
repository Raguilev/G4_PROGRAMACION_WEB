import { useState } from "react";
import styles from "./Profile.module.css";

interface EditProfileModalProps {
  user: { name: string; email: string; password: string };
  closeModal: () => void;
  updateUser: (updatedUser: { name: string; email: string; password: string }) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ user, closeModal, updateUser }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const handleSave = () => {
    const updatedUser = { name, email, password };
    sessionStorage.setItem("usuario", JSON.stringify(updatedUser));
    updateUser(updatedUser);
    closeModal();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Editar Información de Usuario</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className={styles.modalActions}>
          <button className={styles.cancelButton} onClick={closeModal}>Cancelar</button>
          <button className={styles.saveButton} onClick={handleSave}>Aceptar</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
