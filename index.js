/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const twister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`

// Print out the concatenated string
console.log(twister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const part1Upper = part1[part1.length - 1].toUpperCase();
const part2Upper = part2[part2.length - 1].toUpperCase();

const part1Done = part1.slice(0, part1.length-1) + part1Upper;
const part2Done = part2.slice(0, part2.length-1) + part2Upper;
// Print the cameLtaiL-formatted string
console.log(`${part1Done}${part2Done}`);




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal - (billTotal*0.85);

// Print out the tipAmount
console.log(tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let x = Math.floor((Math.random() * 10) + 1);

// Print the generated random number
console.log(x);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;

/* expression1: False
   expression2: True
   expression3: False
   expression4: True
   expression5: True
   expression6: False
   expression7: True
*/
