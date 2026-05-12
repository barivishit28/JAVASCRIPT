//calculator
//this calculator will provide calculations of +-*/
const prompt = require("prompt-sync")();

let x = Number(prompt("Enter Number 1: "));
let y = Number(prompt("Enter Number 2: "));

console.log(`Addition is ${x + y}`);
console.log(`Substraction is ${x - y}`);
console.log(`Multiplication is ${x * y}`);
console.log(`Division is ${x / y}`);