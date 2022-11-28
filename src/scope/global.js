// variable 

var a; // declarando 
var b = 'b'; // declarando y asignando 
b = 'bb'; // re-asignando 
var a = 'aa'; // re-declarando 

// GLOBAL SCOPE 

var fruit = 'Apple'; // GLOBAL  

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Mexico'; // GLOBAL 
    console.log(country);
}

countries();
console.log(country);