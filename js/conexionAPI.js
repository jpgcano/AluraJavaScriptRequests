async function listarVideos() {
    const conexion = await fetch("http://localhost:3001/videos");
    const conexionConvertida = await conexion.json();


    return conexionConvertida;
    //    console.log(conexionConvertida);
}

async function enviarVideo(titulo, descripcion, url, imagen) {
    const conexion = await fetch("http://localhost:3001/videos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            title: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            Url: url,
            image: imagen
        })

    });
    const conexionConvertida = await conexion.json();
    if(!conexion.ok){
        throw new Error("Ha ocurrido al enviar el video");
    }
    return conexionConvertida;
}

async function filtrarVideo(pablabraClave) {
    const conexion = await fetch(`http://localhost:3001/videos?q=${pablabraClave}`);
    const conexionConvertida = conexion.json();
    console.log(conexionConvertida);
    return conexionConvertida;
}




export const conexionApi = {
    listarVideos,
    enviarVideo,
    filtrarVideo,

}

