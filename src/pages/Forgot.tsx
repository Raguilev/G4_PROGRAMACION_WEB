import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "90%" }}>
        <h2 className="text-center mb-3">Nueva contraseña</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Nueva contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Re-escribir nueva contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleResetPassword}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
