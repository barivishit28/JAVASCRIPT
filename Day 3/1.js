function revStr(str) {
    let rev = "";
    for(let i = str.length -1; i >= 0; i--) {
        rev += str[i]
    }
    return rev;
}
let result = revStr("Hello");
console.log(result);