function sumOdd(arr) {
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd.push(arr[i]);
        }
    }
    let sum = 0;
    for (let j = 0; j < odd.length; j++) {
        sum += odd[j];
    }
    return sum;
}

let result = sumOdd([1, 2, 3, 4, 5, 6])
console.log(result)