const dupliFinder = (arr) => {
    let dup = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i +  1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                if(!dup.includes(arr[i])) {
                    dup.push(arr[i])
                }                
            }
        }
    }
    return dup;
}

let res = dupliFinder([1, 2, 3, 2, 5, 2, 6, 3]);
console.log(res);