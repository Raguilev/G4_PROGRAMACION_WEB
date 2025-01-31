import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/main";
import Forgot from "./pages/Forgot"
import Expenses from "./pages/Expenses/Expenses"
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/forgot_password" element={<Forgot />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/profile" element={<Profile />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
