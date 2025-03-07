let informacion = {}; //Creo objeto vacio donde se lamacenarán sus propiedades con sus respectivos valores.

// Declaro expresiones regulares para luego validar el dato que se ingresará.
let reGexNum = /^\d+$|^\d+\.\d+$/; //Valida que sea 1 o mas digitos(numeros) o que sea 1 o más digitos , un punto y 1 o más digitos (decimal).
let reGexAlfa = /^[a-z]+$/i; //Valida que haya letras desde el inicio hasta el final de la cadena ignorando si es mayuscula o minuscula.
let reGexEmail = /^[a-z\d._%+-]+@[a-z\d.-]+\.[a-z]{2,}$/i; //Valida que haya letras digitos . _ % + - 1 o más veces tambien 1 @ luego letras o digitos o . o - 1 o más ves y por ultimo que halla 1 punto y luego dos o mas letras.
let reGexDate = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/; //Valida que el formato ingresado sea dd/mm/yyyy identificando que los dias piuede ser entre 01 y 31 los meses entre 01 y 13 y año de 4 digitos.

// Se crea el manejador
let handler = {
    // Por medio set se crea un función que recibe como parametros el objeto, la propiedad y el valor que se está intentando ingresar.
    set: function(obj, prop, valor){
        // Primero se valida que el valor ingrsado no sea un a cadena de texto vacia.
        if(valor === ""){
            alert(Error("Se debe ingresar un valor a la propiedad."));
            return false;
        }
        // Se valida que se ingrese un número en la propiedad numerica.
        if (prop === "numerico" && !reGexNum.test(valor)) {
            alert(Error("No se pueden ingresar valores que no sean númericos positivos"));
            return false;
        }
        // Se valida que se ingrese letras en la propiedad alfanumerica.
        if(prop === "alfanumerico" && !reGexAlfa.test(valor)){
            alert(Error("No se pueden ingresar valores que no sean letras"))
            return false;
        }
        // Se valida que se ingrese un correo en la propiedad email.
        if(prop === "email" && !reGexEmail.test(valor)){
            alert(Error("No se pueden ingresar valores que no sean correo electronico"));
            return false;
        }
        // Se valida que se ingrese una fecha (dd/mm/yyyy) en la propiedad date.
        if(prop === "date" && !reGexDate.test(valor)){
            alert(Error("No se pueden ingresar valores que no sea una fecha \nFormato: dd/mm/yyyy"));
            return false;
        }

        // Si se pasa el filtro anterior entonces se valida que si la propiedad es númerico se parsea el valor para ingresarlo al objeto como un dato de tipo floar.
        if(prop === "numerico") obj[prop] = parseFloat(valor)
            // Y pues si no es así solamente se agrega el valor a la propiedad así tal cual.
        else obj[prop] = valor;
    }
}

// Se crea el proxy datos
let datos = new Proxy(informacion, handler);

// Se solicitan los datos al usuario.
datos.numerico =prompt("Ingrese un número positivo: ");
datos.alfanumerico = prompt("Ingrese una cadena de texto sin números: ");
datos.email = prompt("Ingrese un correo eletronico: ");
datos.date = prompt("Ingrese una fecha (dd/mm/yyyy): ");

// Se muestran los datos que si ingresaron al objeto.
console.log(datos);
