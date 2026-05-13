const prompt = require("prompt-sync")();

let pass = prompt("Enter Password: ");

while(pass !== "1234") {
    console.log("Incorrect Password!")
    pass = prompt("Try Again: ");
}
console.log("You're Logged In.");