let promesa1 = new Promise((resolve) => setTimeout(() => resolve("Promesa 1 cumplida"), 1000));
let promesa2 = new Promise((resolve) => setTimeout(() => resolve(" Promesa 2 cumplida"), 1000));
let promesa3 = new Promise((resolve) => setTimeout(() => resolve(" Promesa 3 cumplida"), 1000));

Promise.all([promesa1, promesa2, promesa3])
.then((resultados) => console.log("Todas las promesas se cumplieron: \n" + resultados)
);