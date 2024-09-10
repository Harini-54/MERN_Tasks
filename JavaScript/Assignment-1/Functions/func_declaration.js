function calculatearea(side){
    let area = side*side;
    return area;
}
function calperimeter(side){
    let perimeter = 4*side;
    return perimeter;
}
let side = 7;
let area=calculatearea(side);
console.log("The area of a square: "+area);
let perimeter = calperimeter(side);
console.log("The perimeter of a square: "+perimeter);

/*
--output--
The area of a square: 49
The perimeter of a square: 28
 */
