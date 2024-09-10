function calcarea(length=7 , breadth=9){
    return length*breadth;
}
console.log("Area with given length and breadth: ",calcarea(2,4));
console.log("Area with given length only: ",calcarea(4));
console.log("Area with default length and breadth: ",calcarea());

/*
--output--
Area with given length and breadth:  8
Area with given length only:  36
Area with default length and breadth:  63
*/
