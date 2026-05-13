const prompt = require("prompt-sync")();

let age;

do{
    age = prompt("Enter age: ");
} while(age < 18);

console.log("You are adult")