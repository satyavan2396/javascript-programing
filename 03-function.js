
console.log("============Function with no argument no return value============");

function dayOfTheWeek() {
    console.log("Today is Thursday");
    
}
dayOfTheWeek();
console.log("=================Function with arguments and no return value=============");
function addition(n1,n2,n3) {
    var result=n1+n2+n3;
    console.log("Addition of n1,n2,n3 is:",result);
    
}
addition(60,70,40);
console.log("=================Function with arguments and with return value=============");
function square(n1) {
    var result=n1*n1;
    return result
}
var result=square(5);
console.log("Square of 5 is:",result);
var returnValue =square(11);
console.log("Square of 11 is:",returnValue);