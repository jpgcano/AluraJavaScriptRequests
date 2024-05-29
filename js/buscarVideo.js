import { conexionApi } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();


    const datosBusqueda=document.querySelector("[data-busqueda]").value;
    console.log(datosBusqueda);
    const busqueda = await conexionApi.filtrarVideo(datosBusqueda);
    const lista = document.querySelector("[data-lista]");
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    if(busqueda.length==0){
        lista.innerHTML=`<h2 class="mensaje__titulo">No fueron encontrados elementos ${datosBusqueda}</h2>`;
    }
    busqueda.map(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)));
    console.log(busqueda);
}



const bottonbusqueda = document.querySelector("[data-boton-busqueda]");
bottonbusqueda.addEventListener("click",evento => buscarVideo(evento));