let s = "hello";
let sa = s.split("");
console.log(sa);

let e = [];

for(let i = sa.length-1; i >= 0; i--) {
    e.push(sa[i]);
};
console.log(e);
console.log(e.join(""));