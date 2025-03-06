async function mostrarNombres() {
    let obtener = await fetch("../datos.json");
    let datos = await obtener.json();
    datos.forEach(persona => console.log(persona.nombre));    
}

mostrarNombres();