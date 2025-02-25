import {  useState } from "react";
import { useNavigate } from "react-router-dom";




const Login = () => {

  const navigate = useNavigate();
  const [/*showModal*/, setShowModal] = useState<boolean>(false)
  const [error, setError] = useState("");
  const [usuario, setUsuario] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const URL_BACKEND = import.meta.env.URL_BACKEND || "http://localhost:5000"

  const handleUsuarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario(e.currentTarget.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  

  const loginHandler = async () => {
    console.log("🔹 Intentando login con:", usuario, password);
    
    const userData = { usuario, password };
  
    const resp = await fetch(URL_BACKEND+"/users/login", {
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
      
      sessionStorage.setItem("usuario", JSON.stringify(userData)); // ✅ Guardar como JSON
      
  
      
  
      setTimeout(() => {
        if (data.role === 1) {
          navigate("/admin_dashboard");
        } else {
          
          navigate("/dashboard");
        }
      }, 100);
    } else {
      setShowModal(true);
      setError("Credenciales incorrectas");
      setTimeout(() => setError(""), 3000);
      console.log("🔹 Redirigiendo a:", data.role === 1 ? "/admin_dashboard" : "/expenses");
    }
  };
  


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
        <h2 className="text-center mb-3">Iniciar Sesión</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <div className="mb-3">
          <input className="form-control"
            type="text"
            value={usuario}
            placeholder="Usuario"
            onChange={handleUsuarioChange} />
        </div>
        <div className="mb-3">
          <input className="form-control"
            type="password"
            value={password}
            placeholder="Contraseña"
            onChange={handlePasswordChange} />
        </div>
        <a href="/forgot_password" className="d-block text-center text-primary mb-3">
          ¿Olvidaste tu contraseña?
        </a>
        <button className="btn btn-primary w-100 mb-2" onClick={  loginHandler }>
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
