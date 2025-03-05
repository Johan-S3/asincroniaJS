let find = function (numeros, callback) {
    for (let i = 0; i < numeros.length; i++) {
        let element = numeros[i];
        if(callback(element)) return element
    }
    return undefined;
}

let mayorDiez = num => num > 10;

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(find(numeros, mayorDiez));
