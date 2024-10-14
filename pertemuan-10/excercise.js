//Array Excercise
let people = ["Greg", "Mary", "Devon", "James"];
console.log("Array Excercise");

for (let i = 0; i < people.length; i++) { //no 1
    console.log(people[i]);
}

people.forEach(function(person) { //no 2
    console.log(person);
});

people.shift(); //no 3
people.pop(); //no 4
people.unshift("Matt"); //no 5
people.push("Ricky");  //no 6

for (let i = 0; i < people.length; i++) { //no 7
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;  
    }
}
let peopleCopy = people.slice(2);  //no 8
console.log(peopleCopy);

people.splice(2, 1, "Elizabeth", "Artie");  //no 9

let withBob = people.concat("Bob"); //no 10

console.log("Final Result: ",withBob);  

//Object Excercise
let programming = {
    languages :["JavaScript","Python","Ruby"],
    isChallenging:true,
    isRewarding:true,
    difficulty:8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
console.log(' ');
console.log("Object Exercise");


//no 1.
programming.languages.push("Go")
console.log(programming.languages);

//no 2.
programming["difficulty"] = 7;
console.log(programming.difficulty);

//no 3.
delete programming.jokes;
console.log(programming);
//no 4.
programming.isFun = true;
console.log(programming);
//no 5.
programming.languages.map(function(language, index) {
    console.log(`${index} - ${language}`);
});
