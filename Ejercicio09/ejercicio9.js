let i = 0;

setTimeout(() => alert(i), 100); //?

// Asumimos que el tiempo para ejecutar esta función es > 100
for(let j = 0; j < 1000_000_000; j++){
    i++;
}

setTimeout(() => {
    alert("La función se ejecuta despues del bucle OPCION A porque este ingresó al event loop y hasta que no se complete las demas tareas no sale de él.")
    alert("El alert() muestra el número hasta donde llegó el bucle ya que la varaible i iba aumentando con el bucle de 1 en un 1.")
}, 100);