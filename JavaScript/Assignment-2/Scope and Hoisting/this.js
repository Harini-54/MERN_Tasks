//Global scope or outside the function
console.log(this);
//Regular functions
function hii(){
    console.log("Inside regular function");
    console.log(this);
}
hii();
//object methods
const obj={
    name:"Harini",
    age:"20",
    display: function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old. I am inside an object method`)
    }
};
obj.display();
//Arrow functions

const obj1={
    name:"John",
    age:"21",
    show: function(){
        const heyshow =()=>{
            console.log(`My name is ${this.name} and I am ${this.age} years old. I am inside arrow function`)
        };
        heyshow();
    }
};
obj1.show();

/*
--output--
this.js:2 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
this.js:5 Inside regular function
this.js:6 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
this.js:14 My name is Harini and I am 20 years old. I am inside an object method
this.js:25 My name is John and I am 21 years old. I am inside arrow function
*/