// Primitive: number, string, boolean, null, undefined..
//Immutable and stored in stack
let str = "hello";
str[0] = "H";  // This does nothing, as strings are immutable
console.log(str); 
//pass by value
let x = 5;
function changePrimitive(num) {
    num = 10;
}
changePrimitive(x);
console.log(x); 

// Object: object, array, function...
//Mutable and stored in heap
let person = { name: "Alice", age: 25 };
person.age = 30; 
console.log(person.age); 

//pass by reference
let obj = { value: 5 };
function changeObject(o) {
    o.value = 10;
}
changeObject(obj);
console.log(obj.value);  // Output: 10 (object property changed)

/*
--output--
hello
5
30
10
*/