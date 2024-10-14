//IIFE and Callback Function

//IIFE - Jalan otomatis tanpa dipanggil - Immediate Invoked Function Expression
//a. no params, args, return value

// (function () {
//     console.log('Hello World');
// })();

//b. with params, args, return value
// let output = (function (fullName){
//     return "Hello " + fullName
// })("John Doe")
// console.log(output);

//Callback Function
//a. no params, args, return value
function sayHello(callBack){
    callBack()
}

sayHello(function (){
    console.log('Hello World');
})

//b. wtih params, args, return value

function sayHello(callBack){
    let output = callBack("John Doe")
    return output
}
let output = sayHello(function(fullName){
    return "Hello " + fullName
})
console.log(output);