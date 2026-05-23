let nums = [1, 2, 3, 4, 5, 6];
let odd = nums.filter((item) => {
    return item % 2 !== 0;
});
console.log(odd);

let veh = ["car", "bike", "bus", "train"];
let bveh = veh.filter((item) => {
    return item.length >= 4;
});
console.log(bveh);

let marks = [45, 90, 23, 67, 12];
let passed = marks.filter((item) => {
    return item >= 50;
});
console.log(passed);

// let nums = [1, 2, 3];
// let ans = nums.filter((item) => {
//     return false;
// });
// console.log(ans);