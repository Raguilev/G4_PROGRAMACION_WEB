import { useState } from "react";
import CorreoConfirmacion from "../pages/CorreoConfirmacion";

const Registro = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    return (
        <div>
            {!isRegistered ? (
                <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                    <div className="bg-white p-4 rounded shadow-lg text-center" style={{ maxWidth: "450px", width: "90%" }}>
                        <h2 className="fw-bold text-dark">Registro</h2>
                        <input
                            type="text"
                            className="form-control my-3"
                            placeholder="Nombre de usuario"
                        />
                        <input
                            type="email"
                            className="form-control my-3"
                            placeholder="Correo de usuario"
                        />
                        <input
                            type="password"
                            className="form-control my-3"
                            placeholder="Contraseña"
                        />
                        <button className="btn btn-primary w-100 mt-3" onClick={() => setIsRegistered(true)}>
                            Registrar
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <CorreoConfirmacion />
                </div>
            )}
        </div>
    );
};

export default Registro;
