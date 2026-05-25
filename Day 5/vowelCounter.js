const vowelCounter = (str) => {
    let strtoArr = str.split("");
    let onlyvow = [];
    for(let i = 0; i < strtoArr.length; i++) {
        if(strtoArr[i] === "a" || strtoArr[i] === "e" || strtoArr[i] === "i" || strtoArr[i] === "o" || strtoArr[i] === "u" || strtoArr[i] === "A" || strtoArr[i] === "E" || strtoArr[i] === "I" || strtoArr[i] === "O" || strtoArr[i] === "U") {
            onlyvow.push(strtoArr[i]);
        }
    }
    return onlyvow.length;
}
let res = vowelCounter("sarthak");
console.log(res);   