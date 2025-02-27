import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const loginHandler = async () => {
        console.log("🔹 Intentando login con:", email, password);

        const userData = { email, password };

        const resp = await fetch("http://localhost:5000/users/login", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json" },
        });

        const data = await resp.json();
        console.log("🔹 Respuesta del servidor:", data);

        if (data.msg !== "Error en login") {
            const userData = {
                usuarioId: data.userid,
                nombre: data.nombre,
                role: data.role,
                email: data.email,
                token: data.token,
            };

            sessionStorage.setItem("usuario", JSON.stringify(userData));

            setTimeout(() => {
                navigate(data.role === 1 ? "/admin_dashboard" : "/dashboard");
            }, 100);
        } else {
            setError("Credenciales incorrectas o cuenta no verificada.");
            setTimeout(() => setError(""), 3000);
        }
    };

    const verificarUsuario = async () => {
        if (!email.trim()) {
            setError("Ingrese un email válido.");
            return;
        }

        const resp = await fetch(`http://localhost:5000/users/verify-user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await resp.json();

        if (data.exists) {
            navigate(`/forgot_password?email=${email}`);
        } else {
            setError("Correo no encontrado.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
                <h2 className="text-center mb-3">Iniciar Sesión</h2>
                {error && <p className="text-danger text-center">{error}</p>}
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="email"
                        value={email}
                        placeholder="Correo Electrónico"
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="password"
                        value={password}
                        placeholder="Contraseña"
                        onChange={handlePasswordChange}
                    />
                </div>
                <a
                    className="d-block text-center text-primary mb-3"
                    style={{ cursor: "pointer" }}
                    onClick={verificarUsuario}
                >
                    ¿Olvidaste tu contraseña?
                </a>
                <button className="btn btn-primary w-100 mb-2" onClick={loginHandler}>
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
