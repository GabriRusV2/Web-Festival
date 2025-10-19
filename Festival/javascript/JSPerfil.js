document.addEventListener("DOMContentLoaded", () => {
    const perfilDatos = document.getElementById("perfil-datos");
    const btnCerrarSesion = document.getElementById("cerrar-sesion");

    // Obtener datos del usuario activo
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

    if (usuarioActivo) {
        perfilDatos.innerHTML = `
      
            <p><strong>Nombre de usuario: </strong> ${usuarioActivo.usuario || "N/A"}</p>
            <p><strong>Correo: </strong> ${usuarioActivo.email}</p>
            <p><strong>Fecha de Nacimiento: </strong> ${usuarioActivo.año || "N/A"}</p>
            <p><strong>Nacionalidad: </strong> ${usuarioActivo.nacionalidad || "N/A"}</p>
            <p><strong>Contraseña: </strong> ${usuarioActivo.pwd}</p>
           
        `;
    } else {
        perfilDatos.innerHTML = `<p>No se encuentran datos asociados a este usuario.</p>`;
    }

    btnCerrarSesion.addEventListener("click", () => {
        if (usuarioActivo) {
            // Mantener email y contraseña
            const datosBasicos = {
                email: usuarioActivo.email,
                pwd: usuarioActivo.pwd
            };
            localStorage.removeItem("usuarioActivo");
            localStorage.setItem("usuarioActivo", JSON.stringify(datosBasicos));
        }

        window.location.href = "index.html";
    });
});
