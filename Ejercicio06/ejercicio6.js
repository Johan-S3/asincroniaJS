function some(numeros, callback) {
    for (let i = 0; i < numeros.length; i++) {
        let element = numeros[i];
        if(callback(element)){
            return true;
        }
    }
}

let existeNegativos = num =>{
    if(num < 0) return true;
}

let numeros = [0, 1, 2, 4, -2];
if(some(numeros, existeNegativos)) alert("En el vector hay al menos 1 número negativo.");
else alert("En el vector no existen números negativos.");