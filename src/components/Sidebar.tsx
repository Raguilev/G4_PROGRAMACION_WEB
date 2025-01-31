
const Sidebar = () => {
  return (
    <aside className="bg-light d-flex flex-column align-items-center py-4 shadow vh-100 w-100">
      <img
        src="./assets/cara.png"
        alt="User Image"
        className="rounded-circle mb-3"
        width="100"
        height="100"
      />
      <h5 id="navUserName">Usuario</h5>
      <nav className="nav flex-column w-100 mt-4">
        <a className="nav-link text-muted" href="#" data-section="dashboard">
          <img src="/assets/grafico.png" width="20" className="me-2" alt="Dashboard" />
          Dashboard
        </a>
        <a className="nav-link text-muted" href="#" data-section="gastos">
          <img src="/assets/gasto.png" width="20" className="me-2" alt="Gastos" />
          Gastos
        </a>
        <a className="nav-link text-muted" href="#" data-section="presupuestos">
          <img src="/assets/money.png" width="20" className="me-2" alt="Presupuestos" />
          Presupuestos
        </a>
        <a className="nav-link text-muted" href="#" data-section="configuracion">
          <img src="/assets/configuracion.png" width="20" className="me-2" alt="Configuración" />
          Configuración
        </a>
        <a
          className="nav-link text-danger"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#logoutModal"
        >
          <img src="/assets/salida.png" width="20" className="me-2" alt="Salir" />
          Salir
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
