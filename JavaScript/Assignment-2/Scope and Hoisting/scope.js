// Global variable
var totalStudents = 100;  // This is accessible everywhere

function presentStudents() {
    let present = 85;  // This is local to presentStudents function (can't be accessed outside the function)
    console.log("Total Present Students: " + present);
    console.log("Out of: " + totalStudents);  // Accessing global variable
}

function absentStudents() {
    let absent = totalStudents - 85;  // This is local to absentStudents function
    console.log("Total Absent Students: " + absent);
    console.log("Out of: " + totalStudents);  // Accessing global variable
}

function showTotalStudents() {
    console.log("Total Students in the class: " + totalStudents);  // Accessing global variable
}

presentStudents();  
absentStudents();   
showTotalStudents();  

/*
--output--
scope.js:6 Total Present Students: 85
scope.js:7 Out of: 100
scope.js:12 Total Absent Students: 15
scope.js:13 Out of: 100
scope.js:17 Total Students in the class: 100
*/