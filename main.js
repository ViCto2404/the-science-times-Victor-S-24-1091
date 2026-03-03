// Script para mostrar la alerta al pulsar el botón
    document.getElementById("mostrarAlerta").addEventListener("click", function() {
        document.getElementById("miAlerta").classList.remove("d-none");
        document.getElementById("miAlerta").classList.add("show");
        });

        document.addEventListener("DOMContentLoaded", function () {
            // Selecciona todos los elementos con data-bs-toggle="popover"
            var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
            var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
            });
            });