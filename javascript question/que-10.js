function getLastProduct(sales) {
    return sales[sales.length - 1];
}

let productSales = ["Shoes", "T-shirt", "Hat"];
console.log("last product" + getLastProduct(productSales));
