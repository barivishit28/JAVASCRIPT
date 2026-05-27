function maxNum(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }

    } return max;
}

let res = maxNum([12, 45, 7, 89, 23]);
console.log(res);