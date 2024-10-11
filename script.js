function greet(gia) {
return gia;
}


function sum(num1, num2) {
    return num1 + num2;
}
let result = sum(4, 6);
console.log(result);

function setLocalVar(){
letlocalVar = "I am a local variable";
return localVar;
}

console.log(setLocalVar());
console.log(localVar);


function outerFunction() {
let count = 0;
function innerFunction(){
        console.log(count);
    }
return innerFunction();
       
    }

let myClosure = outerFunction();
myClosure();