// Defino la función filter que recibe un array y una función callback como parámetros.
function filter(array, callback) {
    // Creo un nuevo array donde se almacenarán los elementos que cumplan la condición de la callback.
    let newArray = [];
    // Por medio de un bucle for recorro cada elemento del arreglo recibido.
    for(let i = 0; i < array.length; i++){
        // Llamo a la callback enviando como argumento el elemento actual del arreglo según la iteración del bucle.
        if(callback(array[i])){
            // Si la calback retorna true entonces agrego el elemento al nuevo arreglo
            newArray.push(Array[i]);
        }
    }
    // Retorno el nuevo arreglo con los elemetos que cumplieron la condición.
    return newArray;
}

// Defino una función flecha que actúa como callback. Esta función recibe un argumento `num` y verifica si su tipo es "number".
// Retorna true si es un número y false si no lo es.
let validarNum = num => {
    if (typeof num === "number") {
        return  true;
    }
    return false;
}

// Declaro un arreglo con distintos tipos de datos.
let array = [1, 2, "tres", "4", 5];
// Muestro por la consola lo que retorna la funcion filter enviando como argumento el arreglo y la función flecha que actuará como callback.
console.log(filter(array, validarNum));