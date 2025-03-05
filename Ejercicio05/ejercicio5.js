function every(Array, callback) {
    resultado = true;
    for (let i = 0; i < Array.length; i++) {
        if(callback(Array[i]) == false){
            resultado = false;
            break;
        }
    }
    return resultado;
}

let vector = [2, 4, 6, 8];
if(every(vector, num => num % 2 == 0)) alert("Todos los números son pares.");
else alert("No todos los números son pares.");
