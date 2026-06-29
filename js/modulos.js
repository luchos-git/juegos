// obtiene los juegos del navegador (localStorage)
const obtenerJuegos = () => JSON.parse(localStorage.getItem("juegos")) || [];

// guarda el array de juegos en el navegador
const guardarJuegos = (juegos) => localStorage.setItem("juegos", JSON.stringify(juegos));

// hace las cajitas de los juegos en el contenedor
const mostrarJuegos = (juegos = null) => {
    const listado = document.querySelector("#listado");
    const datos = juegos || obtenerJuegos();
    listado.innerHTML = '';

    datos.forEach(j => {
        listado.innerHTML += `
        <div class="juego">
            <div class="info">
                <p><strong>${j.titulo}</strong></p>
                <p>${j.genero} - ${j.consola}</p>
            </div>
            <div class="botones">
                <button class="b-modificar" onclick="prepararEdicion('${j.titulo}')">Modificar</button>
                <button class="b-eliminar" onclick="eliminarJuego('${j.titulo}')">Eliminar</button>
            </div>
        </div>`;
    });
};

// Agrega un nuevo juego al array y lo guarda
const agregarJuego = (nuevoJuego) => {
    const juegos = obtenerJuegos();
    juegos.push(nuevoJuego);
    guardarJuegos(juegos);
    mostrarJuegos();
    mostrarMensaje("Juego agregado con éxito");
};