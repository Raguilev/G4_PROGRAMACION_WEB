import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate();
    const [activeForm, setActiveForm] = useState<"login" | "forgot-password" | "email-confirmation">("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (window.location.pathname.includes("index.html") && !localStorage.getItem("user")) {
            navigate("/login");
        }
    }, [navigate]);

    const login = () => {
        email === "roma" && password === "soda"
            ? (localStorage.setItem("user", JSON.stringify({ email })), navigate("/"))
            : setError(true);
    };

    const logout = () => (localStorage.removeItem("user"), navigate("/login"));

    return (
        <div className="auth-container">
            {activeForm === "login" ? (
                <div id="login-container">
                    <h2>Iniciar Sesión</h2>
                    {error && <p className="text-danger">Credenciales incorrectas</p>}
                    <input type="text" className="form-control" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="form-control" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="btn btn-primary" onClick={login}>Ingresar</button>
                    <button className="btn btn-link" onClick={() => setActiveForm("forgot-password")}>¿Olvidaste tu contraseña?</button>
                </div>
            ) : activeForm === "forgot-password" ? (
                <div id="forgot-password-container">
                    <h2>Recuperar Contraseña</h2>
                    <input type="password" className="form-control" placeholder="Nueva contraseña" />
                    <input type="password" className="form-control" placeholder="Confirmar nueva contraseña" />
                    <button className="btn btn-primary" onClick={() => setActiveForm("login")}>Restablecer</button>
                </div>
            ) : (
                <div id="email-confirmation-container">
                    <h2>Verifica tu correo</h2>
                    <p>Te hemos enviado un correo de confirmación.</p>
                    <button className="btn btn-primary" onClick={() => setActiveForm("login")}>Volver al login</button>
                </div>
            )}
        </div>
    );
};

export default Auth;
