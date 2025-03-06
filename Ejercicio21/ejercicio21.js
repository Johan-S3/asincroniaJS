async function mostrarDatos() {
    try {
        let obtener = await fetch("../datos.json");
        let datos = await obtener.json();
        datos.forEach(element => {
            console.log(elemente);
        });  
    } catch (error) {
        alert(error);
    }
}

mostrarDatos();