const person={
    name:"Harini",
    age:20,
    city:"Chennai"
}
//Accessing with dot notation
console.log(person.name);
//Accessing with square bracket
console.log(person["name"]);
//adding new property using dot notation
person.occupation="Student";
console.log(person.occupation);
//adding new property using square bracket notation
person["hobbies"]="Listening music and Watching movies";
console.log(person["hobbies"]);

/*
---output---
objects.js:7 Harini
objects.js:9 Harini
objects.js:12 Student
objects.js:15 Listening music and Watching movies
*/