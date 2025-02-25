import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const usuarioStr = sessionStorage.getItem("usuario");
        if (usuarioStr) {
            const usuario = JSON.parse(usuarioStr);
            const ruta = usuario.role_id === 1 ? "/admin_dashboard" : "/dashboard";
            navigate(ruta);
        }
    }, [navigate]);

    const handleLogin = async () => {
        const url = "http://localhost:5000/users/login"; // Asegúrate de usar el puerto correcto

        const resp = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password_hash: password })
        });

        const data = await resp.json();

        if (data.msg === "Inicio de sesión exitoso") {
            sessionStorage.setItem("usuario", JSON.stringify(data.user));
            navigate(data.user.role_id === 1 ? "/admin_dashboard" : "/dashboard");
        } else {
            setError(data.msg);
            setTimeout(() => setError(""), 3000);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
                <h2 className="text-center mb-3">Iniciar Sesión</h2>
                {error && <p className="text-danger text-center">{error}</p>}
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary w-100 mb-2" onClick={handleLogin}>
                    Ingresar
                </button>
                <div className="text-center text-muted">O</div>
                <button className="btn btn-dark w-100 mt-2" onClick={() => navigate("/registro")}>
                    Registrarse
                </button>
            </div>
        </div>
    );
};

export default Login;
