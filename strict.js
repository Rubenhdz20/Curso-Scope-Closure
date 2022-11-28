// El modo estricto es una funcionalidad que le permite al motor de JavaScript cambiar la manera en que ejecuta el código. En este modo, se reduce las cosas que podemos hacer, esto es bueno porque permite manejar errores que son poco perceptibles o que el motor de JavaScript sobreentiende y ayuda a su compilación para corregirlos.

// Este en el código colocando en la primera línea "use strict" para todo el archivo. También puede utilizarse en la primera línea de una función, pero no para un bloque en específico.

// Ejemplo usando el modo estricto -- 1
// Si realizas el siguiente código que contiene una asignación sin una declaración, no va a ocurrir un error y el programa se va a ejecutar con normalidad.

nombre = "Andres"
console.log(nombre) // "Andres"

// En modo estricto, no te permitirá realizar esto y provocará un error.
"use strict";

nombre = "Andres"
console.log(nombre) // ReferenceError: nombre is not defined

// Ejemplo usando el modo estricto en una función -- 2
// Si realizas el siguiente código que retornas una variable no declarada, no va a ocurrir un error y el programa se va a ejecutar con normalidad.

function myFunction(){
    return pi = 3.14
}

console.log(myFunction()) // 3.14

// En modo estricto, no te permitirá realizar esto y provocará un error.

"use strict";

function myFunction(){
    return pi = 3.14
}

console.log(myFunction()) // ReferenceError: pi is not defined


// Algunos de los errores que ayuda 'use strict' a prevenir son:
// 1 -- La creacion accidental de variables globales 
// 2 -- Atributos de una sola lectura: si tenemos un objeto se puede modificar para que sea solo de lectura y que no se pueda modificar su valor, writable:false es la manera de agregar esta funcionalidad al objeto
// 3 -- Objetos no extensibles: tambien se puede aplicar esto de la forma Object.preventExtensions impidiendo agregar propiedades 
// 4 -- No se pueden tener parametros duplicados de una funcion 
// 5 -- Sistema Octal: es el sistema de numeros con base 8, en el podemos representar cualquier numero con digitos el 0 al 7. 
// 6 -- Errores con delete: el operador delete nos sirve para eliminar propiedades de un objeto o elementos de un array devolviendonos true o false si se elimino o no. 
// 7 -- Arguments y eval son keywords es decir no se puede declarar variables con esos nombres 
// 8 -- No se permite la instruccion with: esta sirve para extender la cadena de scopes en javascript temporalmente
// Antes de ejecutar nuestro programa el interprete de javascript lo analiza y arma las cadenas de scopes sabiendo exactamente a que lugar del codigo tiene que ir a buscar una variable cuando la queremos usar. 
// 9 -- Palabras Reservadas: estas no se pueden utilizar para nombrar variables o funciones
// 10 -- Funciones Libres: en un objeto que tiene como atributo una funcion sin el uso strict puedes llamar ese atributo por fuera con el nombre del objeto y con el nombre de la funcion, haciendo due'o del mismo objeto(como metodo de un objeto), con use strict las funciones invocadas de manera suelta NO van a tener como due;o el objeto global, si no que directamente no tendran due;o SERAN LIBRES

