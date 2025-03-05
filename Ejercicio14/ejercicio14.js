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
  }).then((valor) => 
    new Promise((resolve, reject) => 
      setTimeout(() => resolve(callback(valor)), 1000))
  ).then((valor) => 
    new Promise((resolve, reject) => 
      setTimeout(() => resolve(callback(valor)), 1000))
  ).then((valor) => 
    new Promise((resolve, reject) => 
      setTimeout(() => resolve(callback(valor)), 1000))
  );
}

promesas(2, sumar).then((final) => {
  setTimeout(() => {
    console.log(`Suma final: ${final}`);
  }, 1000);
});
 
