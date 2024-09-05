const Calculator={
    add:function(a,b){
        return a+b;
    },
    subtract:function(a,b){
        return a-b;
    },
    multiply:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        return a/b;
    }
}
console.log("Addition of 7 and 9:",Calculator.add(7,9));
console.log("Subtarction of 12 from 9:",Calculator.subtract(9,12));
console.log("Multiplication of 7 and 9:",Calculator.multiply(7,9));
console.log("Division of 14 by 7:",Calculator.divide(14,7));

/*
--output--
calculator.js:15 Addition of 7 and 9: 16
calculator.js:16 Subtarction of 12 from 9: -3
calculator.js:17 Multiplication of 7 and 9: 63
calculator.js:18 Division of 14 by 7: 2
*/