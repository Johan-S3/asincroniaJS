const sumar = (a) => {
  let resultado = a + (a + 1);
  console.log(`Suma actual: ${a} + ${a + 1} = ${resultado}`);
  return resultado;
}
const promesas = (a, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a);
    }, 1000);
  }).then(callback)
    .then(callback)
    .then(callback);
}

promesas(2, sumar).then((final) => {
  console.log(`Suma final: ${final}`);
});
 
