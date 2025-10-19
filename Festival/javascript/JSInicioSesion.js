document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.getElementById("btnInicioSesion");
    const errorMsg = document.getElementById("errorMsg");

    btnLogin.addEventListener("click", (event) => {
        event.preventDefault();  

        const emailLogin = document.getElementById("txtInicioSesion").value.trim();
        const pwdLogin = document.getElementById("pwdInicioSesion").value;

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioEncontrado = usuarios.find(u => u.email === emailLogin && u.pwd === pwdLogin);

        if (usuarioEncontrado) {
            errorMsg.textContent = "";
            localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
            window.location.href = "menu.html";
        } else {
            errorMsg.textContent = "Correo o contraseña incorrectos.";
            errorMsg.style.color = "red";
        }
    });

});