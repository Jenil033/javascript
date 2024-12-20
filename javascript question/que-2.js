let max = -Infinity
let arr = [32, 35, 30, 31, 33, 36, 34]

for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}

console.log(max)
