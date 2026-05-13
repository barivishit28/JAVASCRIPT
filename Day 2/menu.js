const prompt = require("prompt-sync")();
console.log("Game Started");

let choice;
do{
    console.log("1. Start Game");
    console.log("2. Exit");
    choice = prompt("Enter your choice: ")
} while(choice != 2);

console.log("Exit Successful");