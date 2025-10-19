document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnRegistro").addEventListener("click", registrarse);


    function registrarse() {
        let email = document.getElementById("email").value;

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        let usr = document.getElementById("txtRegistro").value;
        let pwd = document.getElementById("pwdRegistro").value;
        let anio = parseInt(document.getElementById("anio").value);
        let nacionalidad = document.getElementById("nacionalidad").value;
        let acepta = document.getElementById("acepto").checked;

        if (!acepta) {
            alert("Debes aceptar las condiciones.");
        } else if (anio < 1954 || anio > 2007) {
            alert("Debes tener entre 18 y 70 años.");
        } else {
            const usuario = {
                email: email,
                usuario: usr,
                año: anio,
                nacionalidad: nacionalidad,
                pwd: pwd
            };

            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            // Verificar si ya existe ese email
            const existe = usuarios.some(u => u.email === email);
            if (existe) {
                alert("Este correo ya está registrado.");
                return;
            }

            usuarios.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            alert("Registro completado correctamente.");
            window.location.href = "menu.html";
        }
    }
});
