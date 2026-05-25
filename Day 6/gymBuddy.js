let person = {
    name : "Vishit",
    workout : "Full Body",
    duration : "45 minutes",
    calories : 500
};

console.log(person.workout);
person["duration"] = "55 minutes";
person.calories = 650;
person["goal"] = "-7 Kg";
console.log(person);