const mostrarMensaje = (texto) => {
    const contenedor = document.querySelector(".mensaje");
    contenedor.textContent = texto;
    contenedor.style.display = 'block';
    setTimeout(() => {
        contenedor.style.display = 'none';
    }, 2000);
}
