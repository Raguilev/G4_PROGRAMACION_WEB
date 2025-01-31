import { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";

const Presupuestos = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="container-fluid bg-light">
        <Sidebar />
      <div className="row">
        
          
        

        {/* Contenido Principal - Se expande en el espacio restante */}
        <div className="col-md-9 col-lg-10 py-4">
          <h2 className="mb-4">Mis Presupuestos</h2>

          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>Agregar</button>
          </div>

          {/* 📌 La tabla ahora es más ancha */}
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead className="table-primary">
                <tr>
                  <th>Categoría</th>
                  <th>Monto</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ocio</td>
                  <td>S/. 129.99</td>
                  <td>
                    <button className="btn btn-light" onClick={() => setShowEditModal(true)}>✏️</button>
                    <button className="btn btn-light text-danger" onClick={() => setShowDeleteModal(true)}>🗑️</button>
                  </td>
                </tr>
                <tr>
                  <td>Servicios</td>
                  <td>S/. 1229.99</td>
                  <td>
                    <button className="btn btn-light" onClick={() => setShowEditModal(true)}>✏️</button>
                    <button className="btn btn-light text-danger" onClick={() => setShowDeleteModal(true)}>🗑️</button>
                  </td>
                </tr>
                <tr>
                  <td>Alimentación</td>
                  <td>S/. 779.99</td>
                  <td>
                    <button className="btn btn-light" onClick={() => setShowEditModal(true)}>✏️</button>
                    <button className="btn btn-light text-danger" onClick={() => setShowDeleteModal(true)}>🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modales - Ahora más anchos */}
      {showAddModal && (
        <div className="modal show d-block">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content p-4 rounded-4 shadow-lg">
              <div className="modal-header border-0">
                <h3 className="modal-title fw-bold text-center w-100">Agregar presupuesto</h3>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Categoría</label>
                    <select className="form-select">
                      <option value="Servicios">Servicios</option>
                      <option value="Alimentación">Alimentación</option>
                      <option value="Ocio">Ocio</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Monto</label>
                    <input type="number" className="form-control" placeholder="Ingresar monto en soles" />
                  </div>
                </form>
              </div>
              <div className="modal-footer border-0 d-flex justify-content-between">
                <button className="btn btn-secondary px-4 py-2" onClick={() => setShowAddModal(false)}>Cancelar</button>
                <button className="btn btn-primary px-4 py-2">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="modal show d-block">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content p-4 rounded-4 shadow-lg">
              <div className="modal-header border-0">
                <h3 className="modal-title fw-bold text-center w-100">Editar presupuesto</h3>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Categoría</label>
                    <select className="form-select">
                      <option value="Servicios">Servicios</option>
                      <option value="Alimentación">Alimentación</option>
                      <option value="Ocio">Ocio</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Monto</label>
                    <input type="number" className="form-control" value="1229.99" />
                  </div>
                </form>
              </div>
              <div className="modal-footer border-0 d-flex justify-content-between">
                <button className="btn btn-secondary px-4 py-2" onClick={() => setShowEditModal(false)}>Cancelar</button>
                <button className="btn btn-primary px-4 py-2">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal show d-block">
          <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content p-4 rounded-4 shadow-lg text-center">
              <div className="modal-header border-0">
                <h3 className="modal-title fw-bold w-100">Aviso!</h3>
              </div>
              <div className="modal-body">
                <p>¿Está seguro de que desea eliminar este registro?</p>
              </div>
              <div className="modal-footer border-0 d-flex justify-content-between">
                <button className="btn btn-secondary px-4 py-2" onClick={() => setShowDeleteModal(false)}>No</button>
                <button className="btn btn-primary px-4 py-2">Sí</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Presupuestos;
