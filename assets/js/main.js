document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todas las secciones
    const secciones = document.querySelectorAll('.seccion');

    // Para cada sección, agrega un evento de desplazamiento
    secciones.forEach(seccion => {
        seccion.addEventListener('wheel', scrollSuave);
    });

    // Función para controlar el desplazamiento suave
    function scrollSuave(event) {
        event.preventDefault();
        const delta = event.deltaY;
        let seccionActual = null;

        // Encuentra la sección actual
        secciones.forEach(seccion => {
            const rect = seccion.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                seccionActual = seccion;
            }
        });

        // Encuentra la siguiente o anterior sección, dependiendo de la dirección del scroll
        let siguienteSeccion = null;
        if (delta > 0 && seccionActual.nextElementSibling) {
            siguienteSeccion = seccionActual.nextElementSibling;
        } else if (delta < 0 && seccionActual.previousElementSibling) {
            siguienteSeccion = seccionActual.previousElementSibling;
        }

        // Realiza el desplazamiento suave a la siguiente sección si existe
        if (siguienteSeccion) {
            siguienteSeccion.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

