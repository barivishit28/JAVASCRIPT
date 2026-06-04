async function getData() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    let products = data.products;

    let freqCat = {};

    for (let i = 0; i < products.length; i++) {
        let category = products[i].category;

        if (freqCat[category]) {
            freqCat[category]++;
        } else {
            freqCat[category] = 1;
        }
    }

    let keys = Object.keys(freqCat);

    let highestCategory = keys[0];
    let highestCount = freqCat[keys[0]];

    for (let i = 1; i < keys.length; i++) {
        let category = keys[i];

        if (freqCat[category] > highestCount) {
            highestCount = freqCat[category];
            highestCategory = category;
        }
    }

    console.log("Category:", highestCategory);
    console.log("Count:", highestCount);
}

getData();