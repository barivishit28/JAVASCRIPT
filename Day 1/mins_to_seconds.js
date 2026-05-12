const prompt = require("prompt-sync")();

let minutes = Number(prompt("Emter minutes: "));
let seconds = minutes * 60;

console.log(`${minutes} minutes are ${seconds} seconds.`);