import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CorreoConfirmacion from "../pages/CorreoConfirmacion";

const Registro = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            {!isRegistered ? (
                <div className="card p-4 shadow-sm" style={{ maxWidth: "450px", width: "90%" }}>
                    <h2 className="fw-bold text-center">Registro</h2>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre de usuario"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Correo de usuario"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                        />
                    </div>
                    <button className="btn btn-primary w-100" onClick={() => setIsRegistered(true)}>
                        Registrar
                    </button>
                </div>
            ) : (
                <CorreoConfirmacion />
            )}
        </div>
    );
};

export default Registro;
