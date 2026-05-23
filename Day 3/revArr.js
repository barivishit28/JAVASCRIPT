function reverseArray(arr) {
    let revArr = []
    for(let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}
let result = reverseArray([1, 2, 3]);
console.log(result)