function palCheck(str) {
    let e = [];
    let sa = str.split("");
    for(let i = sa.length -1; i >= 0; i--) {
        e.push(sa[i]);
    }
    let ne = e.join("");

    if(str == ne) {
        return "Palindrome"     
    }
    else {
        return "Not Palindrome";
    }
};
let res = palCheck("madam");
console.log(res)