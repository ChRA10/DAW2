async function consultaNasa(url, contenedor) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    let respuesta = await response.json();
    tratarDatos(respuesta, contenedor);
  } catch (e) {
    console.error(e.message);
    throw e;
  }
}

function tratarDatos(respuesta, contenedor) {
  contenedor.innerHTML = "";
  let object = respuesta;
  let img = document.createElement("img");
  img.src = object.hdurl;
  img.style.width = "100%";
  contenedor.append(img);
}


export { consultaNasa };