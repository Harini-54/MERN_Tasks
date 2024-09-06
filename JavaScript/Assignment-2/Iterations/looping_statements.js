const arr=[1,2,3,4,5,6,7];
console.log("Printing the elements of array using for loop:");
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

const strings=["John","Mary","Sunny","Bunny"];
console.log("Printing the elements of array using while loop:");
let i=0;
while (i<strings.length){
    console.log(strings[i]);
    i++;
}
var sum=0;
for (let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log("Find the sum of all elements in an array through for loop:")
console.log(sum);


var sum1=0;
let j=0;
while (j<arr.length){
    sum1+=arr[j];
    j++;
}
console.log("Find the sum of all elements in an array through while loop:")
console.log(sum1);

/*
--output--
looping_statements.js:2 Printing the elements of array using for loop:
looping_statements.js:4 1
looping_statements.js:4 2
looping_statements.js:4 3
looping_statements.js:4 4
looping_statements.js:4 5
looping_statements.js:4 6
looping_statements.js:4 7
looping_statements.js:8 Printing the elements of array using while loop:
looping_statements.js:11 John
looping_statements.js:11 Mary
looping_statements.js:11 Sunny
looping_statements.js:11 Bunny
looping_statements.js:18 Find the sum of all elements in an array through for loop:
looping_statements.js:19 28
looping_statements.js:28 Find the sum of all elements in an array through while loop:
looping_statements.js:29 28
*/