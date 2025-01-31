import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/mainpage";
import Forgot from "./pages/Forgot"
import Expenses from "./pages/Expenses/Expenses"
import Profile from "./pages/Profile/Profile";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
      <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/forgot_password" element={<Forgot />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/profile" element={<Profile />} />

        
      </Routes>
    </BrowserRouter>
    </StrictMode>,
  );



