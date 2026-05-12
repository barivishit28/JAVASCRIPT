// this will convert celcius to farhenheit

const prompt = require("prompt-sync")();
let c = Number(prompt("Enter the temperature in Celcius: "));

//to convert to farhenheit
let f = (c * 9/5) + 32;
console.log(`The temperature in farhenheit is ${f}`);
