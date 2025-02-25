import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar/user_sidebar";

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<{ name: string; email: string; role_id: number } | null>(null);

    useEffect(() => {
        const storedUser = sessionStorage.getItem("usuario");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="container mt-4">
                <h2 className="mb-4">Mi perfil</h2>
                {user && (
                    <div className="card p-4 shadow-sm">
                        <h3>Información personal</h3>
                        <p><strong>Nombre:</strong> {user.name}</p>
                        <p><strong>Correo electrónico:</strong> {user.email}</p>
                        <p><strong>Rol:</strong> {user.role_id === 1 ? "Administrador" : "Usuario"}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
