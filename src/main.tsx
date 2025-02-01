import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Páginas
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import CorreoConfirmacion from "./pages/CorreoConfirmacion";
import ForgotPassword from "./pages/Forgot";
import Expenses from "./pages/Expenses";
import Profile from "./pages/Profile";
import AdminProfile from "./pages/AdminProfile";  
import DashboardUsuario from "./pages/DashboardUsuarioPage";  
import DashboardAdmin from "./pages/DashboardAdminPage";     
import Historial from "./pages/HistorialAdmin";
import Presupuestos from "./pages/Presupuestos";
import EditarCuentasUsuario_Admin from "./components/modales/EditarCuentasUsuario_Admin";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("No se encontró el elemento #root en el HTML.");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/usuarios" element={<EditarCuentasUsuario_Admin />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/confirmacion" element={<CorreoConfirmacion />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/admin_dashboard" element={<DashboardAdmin />} />
        <Route path="/dashboard" element={<DashboardUsuario />} />
        <Route path="/budgets" element={<Presupuestos />} />
        <Route path="/admin_profile" element={<AdminProfile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
