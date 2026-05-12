const prompt = require("prompt-sync")();

let dollars = Number(prompt("Enter amount in dollars: "));
let rupees = dollars * 95.54;

console.log(`${dollars} dollars is ${rupees} rupees.`);