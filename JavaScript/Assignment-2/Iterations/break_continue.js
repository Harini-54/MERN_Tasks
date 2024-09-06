
//break
const arr=[1,2,3,4,5,6,7];
let x=0;
var sum=0
for(x=0;x<arr.length;x++){
    if (arr[x]==5) break;
    sum+=arr[x];
}
console.log(`Using break when the element is 5: ${sum}`);
var sum1=0;
for(x=0;x<arr.length;x++){
    if (arr[x]==5) continue;
    sum1+=arr[x];
}
console.log(`Using continue when the element is 5: ${sum1}`);

/*
--output--
break_continue.js:10 Using break when the element is 5: 10  // Here the loop will break and give the sum before 5 (1+2+3+4)
break_continue.js:16 Using continue when the element is 5: 23 //here the loop will not execute when it is 5 . so 5 is skipped (1+2+3+4+6+7)
*/