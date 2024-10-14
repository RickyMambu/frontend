//Rest Parameter & Spread Operator
//1. Rest Parameter
//tanpa rest parameter
const func1 =(param1,param2,param3, param4, param5) => {
    console.log(param1,param2,param3, param4, param5);
}
func1("A","B","C","D","E")

//dengan rest parameter
const func2 = (...params) => {
    console.log(params);
}

func2("A","B","C","D","E")

//rest parameter harus berada di terakhir dlm parameter
const func3 = (param1, param2, ...params)=>{
    console.log(param1,param2);
    console.log(params);
}
func2("A","B","C","D","E")

//mini excercise
const penjumlahan = (a,b,c,d,e) => {
    let arr = [a,b,c,d,e]
    let hasil = 0
    arr.forEach ((item) => (hasil += item))
    return hasil
}
console.log(penjumlahan(1,2,3,4,5));

//mini excercise params
const penjumlahan2 = (...huruf) => {
    let hasil = 0
    huruf.forEach ((item) => (hasil += item))
    return hasil
}
console.log(penjumlahan2(1,2,3,4,5,6,7,8,9,10));

//2. Spread Operator => tidak di dalam function
let numbers = [1,2,3,4,5]
console.log(numbers); //akan muncul array
console.log(...numbers); //tidak akan muncul dalam array

//Array
//1. Duplikasi Array
let number2 = [...numbers]
numbers.push(6)
console.log(numbers);

//2. Menggabungkan array
let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = [7,8,9]

let numbers3 = array1.concat(array2, array3)//ES5
let numbers4 = [...array1, ...array2, ...array3] //ES6

//Object
//1. Duplikasi object
const john ={
    fullName: "John Doe",
    age: 30
}
const john2 = {...john, address: "Manado"}

//2. Menggabungkan Object
let obj1