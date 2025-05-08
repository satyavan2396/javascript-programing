console.log("===========1.Function with no arguments and no return value=============");
function display() {
    console.log("Hello I am Satyavan shejal");
    
}
display();
function show() {
    console.log("Become a Full satck Developer");
}
show();
console.log("===========2.Function with  arguments and no return value=============");
function personalDetails(firstName,lastname,collegeName) {
    console.log("First name:",firstName,"last name:",lastname,"College Name:",collegeName);
    
}
personalDetails("satyavan","shejal","Sangola college Sangola");

console.log("===========3.Function with  arguments and with return value=============");
function addThreeValues(n1,n2,n3) {
    var result=n1+n2+n3;
    return result
}
var result=addThreeValues(10.23,600,40);
console.log("addition of three Parameters is:",result);

var returnValue=addThreeValues("Hello ","Good"," Morning")
console.log("Adding Three Parameters is:",returnValue);
console.log("=============Thank You===========");




