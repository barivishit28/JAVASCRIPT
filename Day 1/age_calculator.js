const prompt = require("prompt-sync")();

let birthYear = prompt("Enter your birth year: ");
let birthMonth = prompt("Enter your birth Month(in number for ex:Jan = 1, Feb = 2 and so on): ");

let currentYear = 2026;
let currentMonth = 5;

const age =  currentYear - birthYear;
const xmonth = currentMonth - birthMonth;
const month = xmonth * -1;
console.log(`Your are ${age} years and ${month} months old.`);