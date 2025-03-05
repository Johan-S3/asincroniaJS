async function mostrarDatos() {
    let obtener = await fetch("../datos.json");
    let datos = await obtener.json();
    datos.forEach(element => {
        console.log(element);
    });
}

mostrarDatos();