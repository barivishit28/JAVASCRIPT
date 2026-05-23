function smallNum(arr) {
    let small = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < small) {
            small = arr[i];
        }
    }
    return small;
}
let result = smallNum([4, 5, 2, 7, 8, 9, 5]);
console.log(result);