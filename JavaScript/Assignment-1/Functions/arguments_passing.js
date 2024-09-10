function greet(name){
    console.log(`Hello, ${name}!`);
}
function age(yrs){
    console.log(`I am ${yrs} years old.`);
}
function student(x){
    console.log(`Is Student: ${x}`);
}
function concat(words){
    console.log(words.join(' '));
}
function display(details){
    console.log(`I am living in ${details.city} and I am an ${details.nationality}`);
}

let name= "Harini";
greet(name);
let yrs=20;
age(yrs);
let isstudent = true;
student(isstudent);
let words = ["Harini", "is", "a", "good", "student"];
concat(words);
let details={
    city: "Bangalore",
    nationality: "Indian"
}
display(details);

/*
--output--
arguments_passing.js:2 Hello, Harini!
arguments_passing.js:5 I am 20 years old.
arguments_passing.js:8 Is Student: true
arguments_passing.js:11 Harini is a good student
arguments_passing.js:14 I am living in Bangalore and I am an Indian
*/
