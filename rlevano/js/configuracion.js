//esta hardcodeado muchachos no lo toquen :C
document.getElementById("content").innerHTML = `
    <h3 class="mb-4">Configuración</h3>
    <div class="card p-4">
        <h5 class="card-title">Información personal</h5>
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <p><strong>Nombre:</strong> <span id="userName">Rodolfo Suacheneguer</span></p>
                <p><strong>Correo electrónico:</strong> <span id="userEmail">rneguer@taxes.com</span></p>
                <p><strong>Contraseña:</strong> ****</p>
            </div>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">Editar</button>
        </div>
    </div>

    <!-- Modal de edición -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content rounded-5 p-4">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModalLabel">Editar Información de Usuario</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="editName" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="editName" value="Rodolfo Suacheneguer">
                        </div>
                        <div class="mb-3">
                            <label for="editEmail" class="form-label">Correo</label>
                            <input type="email" class="form-control" id="editEmail" value="rneguer@taxes.com">
                        </div>
                        <div class="mb-3">
                            <label for="editPassword" class="form-label">Nueva Contraseña</label>
                            <input type="password" class="form-control" id="editPassword">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary" id="saveChanges">Guardar</button>
                </div>
            </div>
        </div>
    </div>
`;

// Manejo del formulario de edición
document.getElementById("saveChanges").addEventListener("click", function () {
    const newName = document.getElementById("editName").value;
    const newEmail = document.getElementById("editEmail").value;

    document.getElementById("userName").textContent = newName;
    document.getElementById("userEmail").textContent = newEmail;

    alert("Información actualizada correctamente.");
    localStorage.setItem("user", JSON.stringify({ email: newEmail, name: newName }));

    new bootstrap.Modal(document.getElementById("editModal")).hide();
});
