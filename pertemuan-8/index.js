// //Javascript Object & Conditional
// //Object memiliki properti dan nilai
// //Deklarasi Object
// //Object Literal
// //let john = ["John",30, true] - array

// let john = {
//     firstName: "John",
//     age : 30,
//     isMarried : true,
//     grade : [80,90,100],
//     sayGreetings: function(){ //Object Method
//         console.log('Hello my name is ' + this.firstName);
//     },
//     address: { //Object inside object
//         street: "Jl. Arnold Mononuttu Airmadidi",
//         city: "Minahasa Utara",
//         province: "Sulawesi Utara",
//         postalCode : 95371

//     }
// }
// console.log(john);
// //Mengakses properti da;am object
// //1. Dot notation
// console.log(john.firstName)
// john.age = 31 //ubah nilai
// john.job = "Teacher" //tambah properti baru
// console.log(john.age);
// console.log(john.job);

// //2. Bracket Notation
// console.log(john["firstName"]);
// john["nationality"] = "Indonesia" //tambah properti baru
// console.log(john);

// //Object Method
// john.sayGreetings()

// //Object inside object
// console.log(john.address.city);

// //Delete Property dalam object
// delete john.grade
// console.log(john);


//Javascript conditional
//1. If - else
//Jika suhu hari ini lebih dari atau sama dengan 37,
// tampilkan suhu hari ini panas 
// jika tidak tampilkan suuh hari ini dingin
// Misalkan suhu hari ini adalah 38 derajat
// let temp = 38;
// if (temp >= 37) {
//     console.log("Suhu hari ini panas.");
// } else {
//     console.log("Suhu hari ini dingin.");
// }

let nilai = 100 
if (nilai >= 80 && nilai <= 100) {
 console.log("Grade A");
} 
else if (nilai >= 70 && nilai < 80){    
    console.log("Grade B");
}
else if (nilai >= 50 && nilai < 70){    
    console.log("Grade C");
}
else {
    console.log("Grade D");
}

//3. Switch Case
let number = 1;
switch(number){
    case 1:
        console.log('January');
        break
    case 2:
        console.log('February'); 
        break
    default:
        console.log('Maret');
        break
}
    
