// Creo un objeto vacío que será modificado mediante el Proxy.
const persona = {};

// Defino un manejador (handler) que interceptará las operaciones en el Proxy, 
// es decir, cuando se agreguen o modifiquen propiedades en el objeto.
let handler = {
    set: function(obj, prop, value) { 
        // El método set se ejecuta cada vez que se intente modificar o agregar una propiedad al objeto.
        obj[prop] = value; // Asigna el valor a la propiedad dentro del objeto original.
        return true; // Es necesario devolver true para evitar errores en modo estricto.
    }
};

// Se crea un Proxy llamado person, que envuelve al objeto persona y utiliza el handler para interceptar modificaciones.
let person = new Proxy(persona, handler);

// Se asignan valores al objeto person. Estas asignaciones activan el método set() del handler.
person.name = "Johan";
person.apellido = "Polo";
person.edad = 18;
person.name = "Sebastian"; // En esta linea lo que se está realizando es una re asginación a la propiedad previamente craada del objeto.

// Se muestra el objeto Proxy en la consola.
console.log(person);

