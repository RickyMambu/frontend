//main.js
import { yearUntilRetirement } from './calculate.js';
import { addNumber } from './addNumber.js';
import { makeAjaxRequest as link } from './request.js'; //export - import as
import  calculateArea from './area.js'; //export - import default

yearUntilRetirement({ year: 1987, firstName: 'John' });


console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


const area21 = calculateArea({ radius: 21, power: 2 });
const area7 = calculateArea({ radius: 7, power: 2 });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


link('www.google.com');
