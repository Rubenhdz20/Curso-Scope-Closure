// Estructuras de datos declaradas con const
// Las estructuras de datos, como los arrays u objetos, declaradas con const pueden cambiar las referencias de sus elementos, a este concepto se lo denomina mutabilidad. Sin embargo, siguen las mismas reglas ya mencionadas, no puedes redeclarar ni reasignar una variable de estructura de datos.

const array = ["manzana", "pera"] // declaración y asignación ✅
array[0] = "piña" // Cambio de valor en un elemento del array 
console.log(array) // [ 'piña', 'pera' ]
const array = [1,2,3] // SyntaxError: Identifier 'array' has already been declared. ❌

// En React, una librería de JavaScript, puedes utilizar declaraciones con const para el estado de un componente, porque aunque cambie el valor, lo que sucede internamente es un re-renderizado y no una redeclaración. No te preocupes si no lo entiendes, pero tenlo presente cuando llegues a ese tema.