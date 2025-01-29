document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("saveButton");
    const editModal = new bootstrap.Modal(document.getElementById("editModal"));

    saveButton.addEventListener("click", function () {
        alert("Cambios guardados correctamente.");
        editModal.hide();
    });
});

//de ahí agrego los demás...