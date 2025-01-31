import { useState } from "react";
import CorreoConfirmacion from "../pages/CorreoConfirmacion";

const Registro = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    return (
        <div className="register-container container-box">
            {isRegistered ? (
                <CorreoConfirmacion volverAlLogin={() => setIsRegistered(false)} />
            ) : (
                <div id="register-container">
                    <h2 className="mb-4">Registro</h2>
                    <input
                        type="text"
                        className="registerName form-control mb-3"
                        placeholder="Nombre de usuario"
                    />
                    <input
                        type="email"
                        className="registerEmail form-control mb-3"
                        placeholder="Correo de usuario"
                    />
                    <input
                        type="password"
                        className="registerPassword form-control mb-3"
                        placeholder="Contraseña"
                    />
                    <button className="btn btn-primary w-100" onClick={() => setIsRegistered(true)}>
                        Registrar
                    </button>
                </div>
            )}
        </div>
    );
};

export default Registro;
