//number guessing game

const prompt = require("prompt-sync")();

let num = 8;
let guess = Number(prompt("Guess the correct number between 1 to 10: "));

while(guess !==  num){
    console.log("Oops! Wrong");
    guess = Number(prompt("Try Again: "));
}
console.log("Yay! Your guess was correct.🤩")
