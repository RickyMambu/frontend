//Array in JavaScript
//Deklarasi Array
//Cara 1. Array Literal
// let numbers = [1,2,3,4,5]
// console.log(numbers)

//Cara 2. Kata kunci New
// let numbers2 = new Array(6,7,8,9,10)
// console.log(numbers2);

//  let john = ["John", 30, true, [80,90,100]]
//  console.log(john); //Mixed array
//  console.log(john, length); //array length

//  //Index selalu dimulai dari 0
// console.log(john[1]);

// let numbers2 = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers2, length - 1);

// let index = numbers2.findIndex(function(item){
//     return item === "7"
// })
// console.log(index);

//Array Methods
let array = [1,2,3, "Hello", false, true]
console.log(array);

//1. ToString
console.log(array.toString());
//2. Join
console.log(array.join()); 
console.log(array.join(" "));
//3. Pop
array.pop()
console.log(array);
//4/ Push
array.push()
console.log(array);
//5. shift
array.shift()
console.log(array);
//6. unshift
array.unshift()
console.log(array);
//7. splice
array.splice(2,1) //hapus
console.log(array);

array.splice(1,1,1) //ganti
console.log(array);

array.splice(2,0, 2,3) //tambah
console.log(array);

//8. concat
let buah = ['pisang',"apel","jeruk"]
let sayur = ["tomat","bayam","wortel"]
let biji = ["kacang","kedelai", "polong"]
let makanan = buah.concat(sayur, biji)
console.log(makanan);

//9. slice
let sayuran = makanan.slice(3, 6)
console.log(sayuran);

let bijian = makanan.slice(1,2)
console.log(bijian);