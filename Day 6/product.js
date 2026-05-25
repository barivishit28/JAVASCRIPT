let product = {
    name : "Lenovo Ideapad Gaming 3",
    price : 65000,
    category : "Laptop",
    stock : 50
};

console.log(product.name);
product.stock -= 20;
product["price"] = 56000;
product["discount"] = "9k Off";
console.log(product);