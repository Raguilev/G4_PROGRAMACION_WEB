import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Profile from "../pages/Profile/Profile";
import Expenses from "../pages/Expenses/Expenses";
import styles from "../styles/MainPage.module.css";

const MainPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("usuario");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className={styles.mainLayout}>
      {user && (
        <>
          <Sidebar />
          <div className={styles.content}>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/expenses" element={<Expenses />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
