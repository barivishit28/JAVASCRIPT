let nums = [5, 12, 18, 3, 20];
let big = nums.filter((item) => {
    return item > 10;
});
console.log(big);

let fru = ["apple", "kiwi", "banana", "fig"];
let frus = fru.filter((item) => {
    return item.length > 4;
});
console.log(frus);

let price = [100, 250, 80, 500];
let sortPrice = price.filter((item) => {
    return item >= 200;
});
console.log(sortPrice);

