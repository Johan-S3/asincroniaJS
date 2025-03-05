function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms*1000);
  })
}

segundos = parseInt(prompt("Cuantos segundos se va demorar en resolvere la promesa:"));

delay(segundos).then(() =>alert(`La promesa se cumplió después de ${segundos} segundos`));