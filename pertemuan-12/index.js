//String Literal


//Arrow Function
function sayGreetings1(fullname){
    return `Halo nama saya ${fullName}`
}
console.log(sayGreetings1('John Doe'));

const sayGreetings2 = () => {
    return `Halo nama saya ${fullName}`
    console.log(sayGreetings2("John Doe"));
}

const sayGreetings3 = () => `Halo nama saya ${fullName}`
    console.log(sayGreetings2("John Doe"));

//Arrow function pada IIFE
let output1 = (()=>`Hello`)()
console.log(output1);

//Arrow function pada callback
let numbers = [1,2,3,4,5]
let output2 = numbers.map ((item)=>item)
console.log(output2

);

//Default Paramete
const sayGreetings4 = (fullName) => {
    if (!fullName){
        fullName = `John Doe`
    }
    console.log(`Halo nama saya ${fullName}`);
}

sayGreetings4();

const sayGreeting5 = (fullName = "John Doe", age, address) => {
    console.log(`
        Halo nama saya ${fullName} umnur saya ${age} tahun saya tinggal di ${address}
    `);
}
sayGreetings5()