let marks = [85, 90, 78, 92, 88];

let total = 0;

marks.forEach((mark) => {
    total += mark;
});

let average = total / marks.length;

console.log("Total Marks:", total);
console.log("Average Marks:", average);