function Secondnumber(sales) {
    let sortedSales = sales.sort((a, b) => b - a)
    return sortedSales[1]
}

let salesAmounts = [200, 400, 100, 700, 500];
console.log("Big Number" + Secondnumber(salesAmounts));
