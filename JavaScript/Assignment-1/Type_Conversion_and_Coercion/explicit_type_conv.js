console.log(Number("79"), typeof Number("79"));  
console.log(Number("hello"), typeof Number("hello"));  
console.log(Number(true), typeof Number(true));   
console.log(Number(false), typeof Number(false)); 
console.log(Number(null), typeof Number(null));   
console.log(Number(undefined), typeof Number(undefined));  

// String() conversion
console.log(String(79), typeof String(79)); 
console.log(String(true), typeof String(true));  
console.log(String(false), typeof String(false)); 
console.log(String(null), typeof String(null));  
console.log(String(undefined), typeof String(undefined));  

// Boolean() conversion
console.log(Boolean(79), typeof Boolean(79));  
console.log(Boolean(0), typeof Boolean(0)); 
console.log(Boolean("hello"), typeof Boolean("hello"));  
console.log(Boolean(""), typeof Boolean("")); 
console.log(Boolean(null), typeof Boolean(null));  
console.log(Boolean(undefined), typeof Boolean(undefined));  

/*
--output--
explicit_type_conv.js:1 79 'number'
explicit_type_conv.js:2 NaN 'number'
explicit_type_conv.js:3 1 'number'
explicit_type_conv.js:4 0 'number'
explicit_type_conv.js:5 0 'number'
explicit_type_conv.js:6 NaN 'number'
explicit_type_conv.js:9 79 string
explicit_type_conv.js:10 true string
explicit_type_conv.js:11 false string
explicit_type_conv.js:12 null string
explicit_type_conv.js:13 undefined string
explicit_type_conv.js:16 true 'boolean'
explicit_type_conv.js:17 false 'boolean'
explicit_type_conv.js:18 true 'boolean'
explicit_type_conv.js:19 false 'boolean'
explicit_type_conv.js:20 false 'boolean'
explicit_type_conv.js:21 false 'boolean'
 */

