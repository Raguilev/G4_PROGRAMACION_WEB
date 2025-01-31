import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Correo from "./pages/CorreoConfirmacion";
import Forgot from "./pages/Forgot"
import Expenses from "./pages/Expenses/Expenses"
import Profile from "./pages/Profile/Profile";
import EditarCuentasUsuario_Admin from './components/EditarCuentasUsuario_Admin';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DashboardAdmin from "./pages/DashboardAdminPage";
import Dashboard from "./pages/DashboardUsuarioPage"
import Historial from "./pages/HistorialAdmin";
import Presupuestos from "./pages/budget/Presupuestos";




createRoot(document.getElementById('root')!).render(
      <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/forgot_password" element={<Forgot />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/usuarios" element={<EditarCuentasUsuario_Admin />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/confirmacion" element={<Correo />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/admin_dashboard" element={<DashboardAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/budgets" element={<Presupuestos />} />

        
      </Routes>
    </BrowserRouter>
    </StrictMode>,
  );



