/**
Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado.
 */

// Declaro varibles donde se se almacena elnúmero desde donde se imprimirá hasta donde se imprimirá, parseando el dato recibido a entero.
let desde = parseInt(prompt("Desde que número desea empezar: "))
let hasta = parseInt(prompt("Hata que número desea recorrer: "))
// Declaro variable donde se almacena elnúmero desde donde se imprimir.
let num = desde;

// Creo función donde se imprime losnúmero recibiendo como parametro las varaibles desde y hasta.
function imprimirNumeros(desde, hasta) {
  // por medio de una funcion temperizador creo una funcion llamada imprimir que recibe como parametro la varaible numero que seria el número que se va a imprimir. este demorará 1 segundo y le pasa la variable desde como argumento.
  setTimeout(function imprimir(numero) {
    // Dentro de la funcion imprimo por la consola el número recibido
    console.log(numero);
    // Luego, valido que si el número es menor hasta donde llegará a imprimir entonces
    if (numero < hasta) {
      // Por medio de otro serTimeout llamo a la funcion imprimir demorando 1 segundo y mandando como argumento el número + 1.
      setTimeout(imprimir, 1000, numero+1);
    }
  },1000, desde);
}
// Muestro por la consola que se imprimirá el funcion utilizando setTimeout.
console.log("setTimeout:");
// Y se llama la función imprimirNumeros envaindo como argumentos num(desde que número imprimirá) y hasta(limite de impresión).
imprimirNumeros(num, hasta);

// Creo función donde se imprime los números usando el temporizador setInterval recibiendo como parametros desde donde se imprimira hasta donde.
function imprimirNumeros2(desde, hasta) {
  // Declaro variable e asigno como valor el temporizador setInterval recibiendo que demorará un segundo en ejecutarse.
  let idInterval = setInterval(() => {
    // Muestro el número y se realiza un pos-Incremento.
    console.log(desde++);
    // Valido que si el número que seigue es mayor al limite de imprimir, entonces...
    if (desde > hasta) {
      // Se detiene la ejecución de la funcion setInterval
      clearInterval(idInterval)
    }
  }, 1000);
  
}

// Dentro de una funcion setTimeout que demore los segundos correspondientes a los que se muestran primero  se llama la funcion donde se imprime los números.
setTimeout(() => {
  console.log("\nsetInterval:");
  imprimirNumeros2(desde, hasta);
}, ((hasta + 1) - (desde - 1)) * 1000);


