function freqCounter(arr) {

    let object = {};

    for(let i = 0; i < arr.length; i++) {

        if(object[arr[i]]) {
            object[arr[i]]++;
        }
        else {
            object[arr[i]] = 1;
        }

    }

    return object;
}

let res = freqCounter(["a", "b", "a", "c", "b", "a"]);

console.log(res);