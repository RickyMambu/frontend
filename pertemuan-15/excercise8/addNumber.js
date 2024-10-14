//addNumber.js
export { addNumber};
const addNumber = (...numbers) => {  
    let sum = 0;

    numbers.map(num => sum += num);

    return `The sum is ${sum}`;
};


