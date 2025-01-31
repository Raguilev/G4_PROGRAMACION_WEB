import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const users = [
  { name: "Roma", email: "roma@gmail.com", password: "12345", role: "user" },
  { name: "Admin", email: "admin@admin.admin", password: "admin", role: "admin" }
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      sessionStorage.setItem("usuario", JSON.stringify(user));

      // 🔹 Redirige según el rol del usuario
      if (user.role === "admin") {
        navigate("/usuarios");
      } else {
        navigate("/profile");
      }
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="text-center">Log In</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <input
          type="email"
          className="form-control"
          placeholder="Ingresar correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Ingresar contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />





        <a href="/forgot_password" className="d-block text-primary mb-3">
          ¿Olvidaste tu contraseña?
        </a>
        <button className="btn btn-primary" onClick={handleLogin}>
          Ingresar
        </button>
        <div className="text-muted">O</div>
        <button className="btn btn-dark">Registrarse</button>
      </div>
    </div>
  );
};

export default Login;
