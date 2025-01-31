import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (newPassword === confirmPassword && newPassword !== "") {
      alert("Contraseña restablecida correctamente");
      navigate("/");
    } else {
      setError("Las contraseñas no coinciden");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="text-center">Nueva contraseña</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <input
          type="password"
          className="form-control"
          placeholder="Nueva contraseña"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Re-escribir nueva contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleResetPassword}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
