async function f() {
  let resultado = await new Promise((resolve, reject) => {
    setTimeout(reject, 2000, (new Error("Promise rechazada")));
  });
  return resultado;
}

f().catch(alert);