function mult(a,b){
    console.log("Arguments: ",arguments);
    return a*b;

}
console.log(mult(5,7));

/*
--output--
Arguments:  Arguments(2) [5, 7, callee: ƒ, Symbol(Symbol.iterator): ƒ]
35
*/