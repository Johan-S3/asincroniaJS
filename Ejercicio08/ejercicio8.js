let findIndex = function (numeros, callback) {
    for (let i = 0; i < numeros.length; i++) {
        let element = numeros[i];
        if(callback(element)) return `El elemento se encuentra en la posición: ${i}`;
    }
    return undefined;
}

let mayorDiez = num => num > 10;

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 19];

console.log(findIndex(numeros, mayorDiez));