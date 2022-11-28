// Con var
var nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
var nombre = "Oscar" // redeclaración y reasignación ✅

// Con let
let nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
let nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌

// Con const 
const nombre // SyntaxError: Missing initializer in const declaration. ❌
const nombre = "Andres" // declaración y asignación ✅
nombre = "Valeria" // TypeError: Assignment to constant variable. ❌
const nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌ 

// La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.
// Una variable declarada con var puede ser redeclarada y reasignada.
// Una variable declarada con let puede ser reasignada, pero no redeclarada.
// Una variable declarada con const no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.
// Existe un curso de ECMAScript 6+ para que descubras las nuevas características que agregan al lenguaje. 