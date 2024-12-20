function Discount(prices) {
    let discountedPrices = [];
    for (let i = 0; i < prices.length; i++) {
        discountedPrices.push(prices[i] * 0.9);
    }
    return discountedPrices;
}

let originalPrices = [1000, 2000, 1500, 2500];
console.log("10% discount" + Discount(originalPrices));