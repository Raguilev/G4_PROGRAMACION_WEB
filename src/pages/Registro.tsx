import { useState } from "react";

const Registro = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    return (
        <div className="register-container container-box">
            {isRegistered ? (
                <div id="email-confirmation-container">
                    <h2>Verifica tu correo</h2>
                    <p>Te hemos enviado un correo de confirmación.</p>
                    <button className="btn btn-primary" onClick={() => setIsRegistered(false)}>Volver al login</button>
                </div>
            ) : (
                <div id="register-container">
                    <h2 className="mb-4">Registro</h2>
                    <input type="text" className="registerName form-control mb-3" placeholder="Nombre de usuario" />
                    <input type="email" className="registerEmail form-control mb-3" placeholder="Correo de usuario" />
                    <input type="password" className="registerPassword form-control mb-3" placeholder="Contraseña" />
                    <button className="btn btn-primary w-100" onClick={() => setIsRegistered(true)}>Registrar</button>
                </div>
            )}
        </div>
    );
};

export default Registro;
