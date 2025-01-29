const Sidebar = () =>{
    return <aside className="bg-white d-flex flex-column align-items-center py-4 shadow">
              <img src="https://via.placeholder.com/80" alt="Profile" className="rounded-circle mb-3" />
              <h5>Jessica Straus</h5>
              <nav className="nav flex-column w-100 mt-4">
                <a className="nav-link active text-primary fw-bold" href="#">
                  Dashboard
                </a>
                <a className="nav-link text-secondary" href="#">
                  Gastos
                </a>
                <a className="nav-link text-secondary" href="#">
                  Presupuestos
                </a>
                <a className="nav-link text-secondary" href="#">
                  Configuración
                </a>
                <a className="nav-link text-secondary" href="#">
                  Salir
                </a>
              </nav>
            </aside>
}
export default Sidebar