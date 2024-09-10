function double(num){
    return num * 2;
}
function addfifty(num){
    return num + 50;
}
function divbytwo(num){
    return num/2;
}
let result = divbytwo(addfifty(double(9)));
console.log("Result: ",result);
