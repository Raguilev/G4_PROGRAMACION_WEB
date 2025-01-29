//esta hardcodeado muchachos no lo toquen X2:C
document.getElementById("content").innerHTML = `
    <h3 class="mb-4">Mis gastos</h3>

    <div class="d-flex justify-content-end gap-2 mb-3">
        <button class="btn btn-primary"><i class="bi bi-funnel"></i> Filtrar</button>
        <button class="btn btn-secondary"><i class="bi bi-download"></i> Exportar</button>
        <button class="btn btn-success"><i class="bi bi-plus"></i> Agregar</button>
    </div>

    <div class="table-responsive">
        <table class="table table-bordered">
            <thead class="table-primary">
                <tr>
                    <th>Fecha</th>
                    <th>Categoría</th>
                    <th>Descripción</th>
                    <th>Recurrente</th>
                    <th>Monto</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody id="gastosTable">
                <tr>
                    <td>12/12/2024</td>
                    <td>Ocio</td>
                    <td>La Niebla, libro de Steven King</td>
                    <td>No</td>
                    <td>S/. 29.99</td>
                    <td>
                        <img src="assets/lapiz.png" width="20" class="me-2 edit-icon" onclick="openEditModal('12/12/2024', 'Ocio', 'La Niebla, libro de Steven King', false)">
                        <img src="assets/basura.png" width="20" class="delete-icon">
                    </td>
                </tr>
                <tr>
                    <td>02/12/2024</td>
                    <td>Servicios</td>
                    <td>Servicio de Luz</td>
                    <td>Si</td>
                    <td>S/. 229.99</td>
                    <td>
                        <img src="assets/lapiz.png" width="20" class="me-2 edit-icon" onclick="openEditModal('02/12/2024', 'Servicios', 'Servicio de Luz', true)">
                        <img src="assets/basura.png" width="20" class="delete-icon">
                    </td>
                </tr>
                <tr>
                    <td>02/12/2024</td>
                    <td>Servicios</td>
                    <td>Servicio del agua</td>
                    <td>Si</td>
                    <td>S/. 129.99</td>
                    <td>
                        <img src="assets/lapiz.png" width="20" class="me-2 edit-icon" onclick="openEditModal('02/12/2024', 'Servicios', 'Servicio del agua', true)">
                        <img src="assets/basura.png" width="20" class="delete-icon">
                    </td>
                </tr>
                <tr>
                    <td>05/12/2024</td>
                    <td>Servicios</td>
                    <td>Movistar</td>
                    <td>Si</td>
                    <td>S/. 169.99</td>
                    <td>
                        <img src="assets/lapiz.png" width="20" class="me-2 edit-icon" onclick="openEditModal('05/12/2024', 'Servicios', 'Movistar', true)">
                        <img src="assets/basura.png" width="20" class="delete-icon">
                    </td>
                </tr>
                <tr>
                    <td>05/12/2024</td>
                    <td>Alimentación</td>
                    <td>Compras del mes</td>
                    <td>Si</td>
                    <td>S/. 369.99</td>
                    <td>
                        <img src="assets/lapiz.png" width="20" class="me-2 edit-icon" onclick="openEditModal('05/12/2024', 'Alimentación', 'Compras del mes', true)">
                        <img src="assets/basura.png" width="20" class="delete-icon">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Modal de edición de gasto -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content rounded-5 p-4">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModalLabel">Editar gasto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="editFecha" class="form-label">Fecha</label>
                            <input type="date" class="form-control" id="editFecha">
                        </div>
                        <div class="mb-3">
                            <label for="editCategoria" class="form-label">Categoría</label>
                            <select class="form-select" id="editCategoria">
                                <option value="Ocio">Ocio</option>
                                <option value="Servicios">Servicios</option>
                                <option value="Alimentación">Alimentación</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="editRecurrente" class="form-label">Recurrente</label>
                            <input type="checkbox" id="editRecurrente">
                        </div>
                        <div class="mb-3">
                            <label for="editDescripcion" class="form-label">Descripción</label>
                            <textarea class="form-control" id="editDescripcion"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
`;

// Función para abrir el modal con datos prellenados
function openEditModal(fecha, categoria, descripcion, recurrente) {
    document.getElementById("editFecha").value = fecha;
    document.getElementById("editCategoria").value = categoria;
    document.getElementById("editDescripcion").value = descripcion;
    document.getElementById("editRecurrente").checked = recurrente;
    
    new bootstrap.Modal(document.getElementById("editModal")).show();
}
