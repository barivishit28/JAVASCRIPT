async function loadData() {
    let data = await something;
}

// arrow function

const getData = async (a, b) => {
    let data = await something;
}

// fetch data - returns promise

fetch("URL");
fetch("https://dummyjson.com/products")

// combining everything

const fetchData = async (x, y) => {
    let data = await fetch("URL");
}