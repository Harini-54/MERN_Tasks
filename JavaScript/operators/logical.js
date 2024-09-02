let a=9;
let b=7;
let c=5;
let op1 = a>b && c>b; // if both statements are true , gives true
let op2 = a>b || c>b; // if one of the statements is true, gives true
let op3 = !(op2); // if true , give false and vice versa.
console.log("a>b && c>b: "+op1); 
console.log("a>b || c>b: "+op2); 
console.log("!(a>b || c>b): "+op3); 

/*
--output--
a>b && c>b: false
logical.js:8 a>b || c>b: true
logical.js:9 !(a>b || c>b): false
*/