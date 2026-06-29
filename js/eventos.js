document.addEventListener("DOMContentLoaded", () => {
    // Carga los juegos al iniciar
    mostrarJuegos();

    /* --- EVENTOS DE INTERFAZ (Botones y formularios) --- */
    
    // Muestra el formulario de agregar al hacer click
    document.querySelector("#b-agregar").addEventListener("click", () => {
        document.querySelector("#agregar").style.display = "block";
    });

    // Procesa el formulario de agregar (el submit)
    document.querySelector("#agregar").addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que la página se recargue
        const data = new FormData(e.target);
        agregarJuego(Object.fromEntries(data.entries()));
        e.target.reset(); // Limpia los campos
        e.target.style.display = "none"; // Oculta el form
    });

})