async function cadena() {
    return Promise.resolve("Operación completada");
}

setTimeout(() => {
  cadena().then(alert)
}, 1000);

