import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import Forgot from "./pages/Forgot"
import Expenses from "./pages/Expenses/Expenses"
import Profile from "./pages/Profile/Profile";
import EditarCuentasUsuario_Admin from './components/EditarCuentasUsuario_Admin';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
createRoot(document.getElementById('root')!).render(
      <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/forgot_password" element={<Forgot />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/usuarios" element={<EditarCuentasUsuario_Admin />} />
        
      </Routes>
    </BrowserRouter>
    </StrictMode>,
  );



