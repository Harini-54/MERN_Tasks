let op1 = "9" + 7;
let op2 = "9" - 7;
let op3 = "9" * 7;
let op4 = "9" / 7;
let op5 = "9" + true;
let op6 =  9 === "9";
let op7 =  9 == "9";
let op8 =  null== undefined;
let op9 =  null === undefined;
let op10 = "9" > 7;
let op11 = "9" < 7;

console.log("Implicit Coercion in Operations:");
console.log('"9" + 7: ' + op1); 
console.log('"9" * 7: ' + op3);
console.log('"9" - 7: ' + op2); 
console.log('"9" / 7: ' + op4); 
console.log('"9" + true: ' + op5); 
console.log('9 === "9": ' + op6);
console.log('9 == "9": ' + op7);
console.log('null == undefined: ' + op8);
console.log('null === undefined: ' + op9);
console.log('"9" > 7: '+op10);
console.log('"9" < 7: '+op11);

/*
--output--
implicit_type_coerc.js:13 Implicit Coercion in Operations:
implicit_type_coerc.js:14 "9" + 7: 97
implicit_type_coerc.js:15 "9" * 7: 63
implicit_type_coerc.js:16 "9" - 7: 2
implicit_type_coerc.js:17 "9" / 7: 1.2857142857142858
implicit_type_coerc.js:18 "9" + true: 9true
implicit_type_coerc.js:19 9 === "9": false
implicit_type_coerc.js:20 9 == "9": true
implicit_type_coerc.js:21 null == undefined: true
implicit_type_coerc.js:22 null === undefined: false
implicit_type_coerc.js:23 "9" > 7: true
implicit_type_coerc.js:24 "9" < 7: false
*/