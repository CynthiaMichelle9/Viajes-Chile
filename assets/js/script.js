import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

/* Activar tooltips */
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function () {
    // Mostrar una alerta con un mensaje de éxito tipo boostrap
    let alerta = document.createElement("div");
    alerta.classList.add("alert", "alert-success");

    alerta.textContent = "¡Mensaje enviado con éxito!";
    // Establecer estilos CSS para la alerta
    alerta.style.position = "fixed";
    alerta.style.top = "20px"; // Puedes ajustar esta distancia según tus necesidades
    alerta.style.left = "50%"; // Centra horizontalmente la alerta
    alerta.style.transform = "translateX(-50%)"; // Centra horizontalmente la alerta
    alerta.style.textAlign = "center"; // Centra el texto dentro de la alerta

    document.body.appendChild(alerta);

    setTimeout(function() {
        alerta.style.transition = "opacity 1s ease"; // Definir la animación de desvanecimiento
        alerta.style.opacity = "0"; // Cambiar la opacidad a 0 para que se desvanezca
        setTimeout(function() {
            alerta.remove(); // Eliminar la alerta después de la animación
        }, 1000); // Esperar 1 segundo (1000 milisegundos) antes de eliminar la alerta
    }, 3000); // Esperar 3 segundos (3000 milisegundos) antes de comenzar la animación
});
