/**
Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado.
 */


let desde = parseInt(prompt("Desde que número desea empezar: "))
let hasta = parseInt(prompt("Hata que número desea recorrer: "))


function imprimirNumeros(desde, hasta) {
  setTimeout(function imprimir(numero) {
    console.log(numero);
    if (numero < hasta) {
      setTimeout(imprimir, 1000, numero+1);
    }
  },1000, desde);
}
console.log("setTimeout:");
imprimirNumeros(desde, hasta);

function imprimirNumeros2(desde, hasta) {
  let idInterval = setInterval(() => {
    console.log(desde++);
    if (desde > hasta) {
      clearInterval(idInterval)
    }
  }, 1000);
  
}
setTimeout(() => {
  console.log("\nsetInterval:");
  imprimirNumeros2(desde, hasta);
}, (hasta - desde) * 1000);


