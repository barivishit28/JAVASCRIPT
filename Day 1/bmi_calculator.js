// bmi calculator

const prompt = require("prompt-sync")();

let height = Number(prompt("Enter your height in meters: "));
let weight = Number(prompt("Enter your weight in Kilograms: "));

let bmi = weight / (height * height);
console.log(`Your Body Mass Index is ${bmi}`)