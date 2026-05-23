function countEvenNum(arr) {
    let even = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
    }
    return even.length;
}
let result = countEvenNum([1, 2, 3, 4, 5, 6, 7, 8, 100, 60, 1076]);
console.log(result);