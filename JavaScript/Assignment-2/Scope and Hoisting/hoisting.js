//Hoisting for variables 
console.log("Hoisting for variables");
console.log(x);
//console.log(y); Error! not allowed for let
//console.log(z); Error! not allowed for const
console.log("Hoisting for let and const is not allowed");
var x=9;
let y=10;
const z=11;
//Hoisting for functions:
console.log("Hoisting for functions");
hello();
function hello(){
    console.log("Hello!!!");
}

if (!products) deleteproducts();
var products=10;
function deleteproducts(){
    console.log("products deleted!");
}

// greet(); //Gives type error because it is declared with var
// var greet = function(){
//     console.log("Hello! Inside greet");
// }

/*
--output--
hoisting.js:2 Hoisting for variables
hoisting.js:3 undefined
hoisting.js:6 Hoisting for let and const is not allowed
hoisting.js:11 Hoisting for functions
hoisting.js:14 Hello!!!
hoisting.js:20 products deleted!
*/