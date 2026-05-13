const prompt = require("prompt-sync")();

let name = prompt("Enter Your Name: ")
while(name !== "Vishit") {
        console.log("Incorrect");
        name = prompt("Enter again: ")
}
console.log("Correct")