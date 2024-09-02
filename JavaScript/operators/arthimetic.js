let a=9;
let b=7;
let sum = a+b;
let diff = a-b;
let mult= a*b;
let div = a/b;
let mod = a % b;
let complex_op = ((a+b)*(a-b))/b; //first the operation in the brackets will be done and then the remaining operations.
console.log("Addition(a+b): "+sum);
console.log("subtraction(a-b): "+diff);
console.log("Multiplication(a*b): "+mult);
console.log("Division(a/b): "+div);
console.log("Modulus or Remainder(a%b): "+mod);
console.log("Complex operation using parenthesis (((a+b)*(a-b))/b): "+complex_op);

/*Addition(a+b): 16
arthimetic.js:10 subtraction(a-b): 2
arthimetic.js:11 Multiplication(a*b): 63
arthimetic.js:12 Division(a/b): 1.2857142857142858
arthimetic.js:13 Modulus or Remainder(a%b): 2
arthimetic.js:14 Complex operation using parenthesis (((a+b)*(a-b))/b): 4.571428571428571
 */