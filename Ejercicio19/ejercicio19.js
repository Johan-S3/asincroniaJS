let promesa1 = new Promise((resolve) => setTimeout(() => resolve("Promesa 1 cumplida"), 1000));
let promesa2 = new Promise((resolve, reject) => setTimeout(() => reject(" Promesa 2 rechazada"), 1000));
let promesa3 = new Promise((resolve) => setTimeout(() => resolve(" Promesa 3 cumplida"), 1000));

Promise.allSettled([promesa1, promesa2, promesa3])
.then((resultados) => {
    console.log("Resultado de todas las promesas:")
    resultados.forEach(element => {
        console.log(element);
    });
});