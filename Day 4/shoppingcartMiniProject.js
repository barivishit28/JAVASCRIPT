//1
let cart = [499, 1299, 799, 199];
console.log(cart);

//2
let disc = cart.map((item) => {
    return item - (10/100 * item);
});
console.log(disc);

//3
let prem = cart.filter((item) => {
    return item >= 500;
})
console.log(`Premium Products: ${prem}`);

//4
console.log(cart.includes(799));
console.log(cart.includes(5000));

//5
cart.push(2999);
console.log(cart);

//6
cart.shift();
console.log(cart);
console.log(cart.length)

//7
let lower = cart.map((item) => {
    if(item < 500) {
        return "LOW PRICE";
    };
    return item;
})
console.log(lower);