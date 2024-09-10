
"use strict";
/*
driver_license = true; // cause error because it is not declared
console.log("Has Driver license: "+driver_license);
*/ 
let driver_license = true;
console.log("Has Driver license: "+driver_license);
/*
function myFunction(x, x) {
    // Error in strict mode: Duplicate parameter name not allowed in this context.
}
*/
function myFunction(x, y) {
    let z= x+y;
    return z;
}
console.log(myFunction(7,2));
/*
let eval=2+3;
console.log(eval); // error: prevents using eval as a variable name, causing an error
let arguments = 5;
console.log(arguments); //disallows using arguments as a variable name
*/ 
