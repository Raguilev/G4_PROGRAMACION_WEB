import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const usuario = queryParams.get("user") || "";

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const URL_BACKEND = import.meta.env.URL_BACKEND || "http://localhost:5000"

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        const resp = await fetch(URL_BACKEND+"/users/reset-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ usuario, newPassword }),
        });

        const data = await resp.json();
        if (data.success) {
            setMessage("Contraseña actualizada correctamente.");
            setTimeout(() => navigate("/"), 2000); // Redirige al login después de 2s
        } else {
            setError("Error al actualizar la contraseña.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center">Nueva contraseña</h2>
                {error && <p className="text-danger text-center">{error}</p>}
                {message && <p className="text-success text-center">{message}</p>}
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
