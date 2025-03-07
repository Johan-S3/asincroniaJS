// Creo función donde se recibe como parametro un arreglo y una callback
function map(array, callback) {
    // Declaro e asigno a una variable un arreglo vacio.
    let newArray = [];
    // Por medio de un bucle for recorro cada elemento del arreglo recibido y le agrego el valor que retorna la callback pasandole como argumento el valor del arreglo en esa iteración.
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    // Por ultimo retorno el arreglo creado dentro de la función.
    return newArray;
}

// Decfalro e asigno a una varaible un array.
let array = [1, 2, 3, 4, 5];
// Declaro varible donde se llama a la funcion map enviado como argumento el arreglo y una arrow funtion (callback) que multiplica cada elemento por 2.
let duplicado = map(array, num => num * 2);

// Se imprime por pantalla el valor almacenado en la variable diplicado que lo que almacena es el valor retornado por la función que se llama.
console.log(duplicado);
