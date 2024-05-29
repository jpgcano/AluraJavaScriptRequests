import { conexionApi } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");
export default function crearCard(titulo, descripcion, url, imagen) {
    const video = document.createElement("li");
    video.classNameP = "videos_items";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; geolocation"
        allowfullscreen></iframe>
        <div class="descripcion-video">
            <img src="${imagen}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        </div>`;
        return video;
}

async function listarVideos() {
    try {
        const listaApi = await conexionApi.listarVideos();
    listaApi.map(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)));
    } catch {
        lista.innerHTML='<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion</h2>';
    }


}
listarVideos()