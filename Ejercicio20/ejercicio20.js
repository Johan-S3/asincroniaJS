function procesarElemento(nombre) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            console.log(`Nombre: ${nombre}, procesado con exito.`);
            resolve();
        }, 1000)
    );
}

async function procesarLista() {
    for (let nombre of nombres) {
        await procesarElemento(nombre);
    }
}

let nombres = ["Yari", "Breyner", "Johan", "Helder", "Manuel"];

procesarLista();