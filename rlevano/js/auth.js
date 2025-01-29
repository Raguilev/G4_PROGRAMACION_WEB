document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("index.html") && !localStorage.getItem("user")) {
        window.location.href = "login.html";
    }
});

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulación de credenciales
    const validEmail = "roma";
    const validPassword = "soda";

    if (email === validEmail && password === validPassword) {
        localStorage.setItem("user", JSON.stringify({ email }));
        window.location.href = "index.html"; // Redirigir al perfil
    } else {
        document.getElementById("error-message").classList.remove("d-none");
    }
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}

// Mostrar los diferentes formularios sin recargar la página
function showRegister() {
    toggleVisibility("login-container", "register-container");
}

function showForgotPassword() {
    toggleVisibility("login-container", "forgot-password-container");
}

function showConfirmation() {
    toggleVisibility("register-container", "email-confirmation-container");
}

function goToLogin() {
    toggleVisibility("email-confirmation-container", "login-container");
}

function resetPassword() {
    const newPassword = document.getElementById("newPassword").value;
    const confirmNewPassword = document.getElementById("confirmNewPassword").value;

    if (newPassword !== confirmNewPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    alert("Contraseña restablecida correctamente.");
    goToLogin();
}

// Función para alternar la visibilidad de los formularios
function toggleVisibility(hideId, showId) {
    document.getElementById(hideId).classList.add("d-none");
    document.getElementById(showId).classList.remove("d-none");
}
