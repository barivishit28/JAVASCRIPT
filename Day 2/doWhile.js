const prompt = require("prompt-sync")();

let pass;

do{
    pass = prompt("Enter Password: ")
} while(pass !== "1234");

console.log("Logged In ✅")