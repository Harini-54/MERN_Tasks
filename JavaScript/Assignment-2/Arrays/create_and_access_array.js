//Create an array of fruits and print the elements using a for loop.
const fruits=["Mango", "Orange", "Guava", "Banana"]
let n = fruits.length; //Finding length of an array and printing it.
console.log("Length of array: ",n);
for (let i=0; i<n; i++){
    console.log(fruits[i]);
}
//Access the third element of an array and print it.
console.log(`Third element of the array: ${fruits[2]}`);

/*
--output--
Length of array:  4
create_and_access_array.js:6 Mango
create_and_access_array.js:6 Orange
create_and_access_array.js:6 Guava
create_and_access_array.js:6 Banana
create_and_access_array.js:9 Third element of the array: Guava

*/