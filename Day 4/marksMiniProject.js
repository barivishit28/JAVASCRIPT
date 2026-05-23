let marks = [45, 78, 23, 90, 56];

//1
let passed = marks.filter((item) => {
    return item >= 40;
});
console.log(marks);
console.log(passed);

//2
let grace = marks.map((item) => {
    return item + 5;
});
console.log(marks);
console.log(grace);

//3
let toppers = marks.filter((item) => {
    return item >= 80;
});
console.log(toppers);

//4
let fail = marks.map((item) => {
    if(item < 40){
        return "FAIL";
    }
    return item;
});
console.log(fail);