function findLargest(arr) {
    let largest = arr[0];
    for(let i = 0; i < arr.length; i++) {
        
        if(arr[i] > largest){
            largest = arr[i];
        }
        
    }return largest;
}
let lNum = findLargest([1, 2, 3, 4]);
console.log(lNum);