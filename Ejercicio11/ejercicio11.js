function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms * 1000);
  })
}
delay(3).then(() =>alert(`La promesa se cumplió después de 3 segundos`));
