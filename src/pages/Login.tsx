import { useState } from "react";
import { useNavigate } from "react-router-dom";


const users = [
  { name: "roma", email: "roma", password: "roma", role: "user" },
  { name: "admin", email: "admin", password: "admin", role: "admin" }
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const user = users.find(
      (u) => u.email === trimmedEmail && u.password === trimmedPassword
    );

    if (user) {
      sessionStorage.setItem("usuario", JSON.stringify(user));
      
      if (user.role === "admin") {
        navigate("/admin_dashboard"); 
      } else {
        navigate("/dashboard");
      }
    } else {
      setError("Credenciales incorrectas");
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
        <a href="/forgot_password" className="d-block text-center text-primary mb-3">
          ¿Olvidaste tu contraseña?
        </a>
        <button className="btn btn-primary w-100 mb-2" onClick={handleLogin}>
          Ingresar
        </button>
        <div className="text-center text-muted">O</div>
        <button
          className="btn btn-dark w-100 mt-2"
          onClick={() => navigate("/registro")}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Login;
