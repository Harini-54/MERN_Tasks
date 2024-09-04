const fruits=["Mango", "Orange", "Guava", "Banana"]
fruits.push("Apple");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("Pomegranate");
console.log(fruits);
fruits.shift();
console.log(fruits);

/*
--output--
operations.js:3 (5) ['Mango', 'Orange', 'Guava', 'Banana', 'Apple']
operations.js:5 (4) ['Mango', 'Orange', 'Guava', 'Banana']
operations.js:7 (5) ['Pomegranate', 'Mango', 'Orange', 'Guava', 'Banana']
operations.js:9 (4) ['Mango', 'Orange', 'Guava', 'Banana']

*/