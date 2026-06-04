async function getData() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    let products = data.products;
    for(let i = 0; i < products.length; i++) {
        console.log(products[i].price);
    }
}

getData();