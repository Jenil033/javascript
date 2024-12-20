
function reverseProductCode(productCode) {
    return productCode.split('').reverse().join('');
}

let productCode = "AB1234";
console.log("product code" + reverseProductCode(productCode));