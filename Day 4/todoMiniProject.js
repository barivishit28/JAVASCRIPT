let todo = [];

//1
todo.push("study", "gym", "sleep");
console.log(todo);
console.log(todo.length);

//2
todo.pop();
console.log(todo);

//3
todo.unshift("wake up early");
console.log(todo);  

//4
console.log(todo.includes("gym"))
console.log(todo.includes("sleep"));

//5
todo.shift();
console.log(todo);
console.log(todo.length);