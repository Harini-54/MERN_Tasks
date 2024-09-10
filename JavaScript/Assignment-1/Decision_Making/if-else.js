let pass_length = 9;
if (pass_length<=5){
    console.log("Password strength is weak");
}
else if (pass_length>5 && pass_length<=8){
    console.log("Password strength is good");
}else{
    console.log("Password strength is strong");
}

let rain=true;
if (rain){
    console.log("It's raining outside. Carry an umbrella");
}else{
    console.log("It's not raining outside");
}

/*
output:
Password strength is strong
It's raining outside. Carry an umbrella
*/
