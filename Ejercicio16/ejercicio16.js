fetch("../datos.json").then(response => response.json()
).then(datos => {
    let iniciaA = datos.filter(persona => persona.nombre[0] === "a".toUpperCase());
    iniciaA.forEach(element => {
        console.log(element);
    });
})