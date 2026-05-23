let nums = [2, 4, 6];

let doubled = nums.map((items) => {
    return items * 2;
});
console.log(doubled);

let rs = [100, 200, 300];

let fr = rs.map((items) => {
    return "₹" + items;
});
console.log(fr);

let lan = ["html", "css", "js"];

let LANG = lan.map((items) => {
    return items.toUpperCase();
});
console.log(LANG)

let marks = [47, 67, 30];

let grace = marks.map((items) => {
    return items + 10;
});
console.log(grace);

let fru = ["apple", "banana", "mango"];
let newf = fru.map((items, index) => {
    return index + "-" + items;
});
console.log(newf);