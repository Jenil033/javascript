function Cars(cars) {
    let lastCar = cars.pop(); 
    cars.unshift(lastCar); 
    return cars;
}

let carLine = ["Car1", "Car2", "Car3", "Car4"];
console.log("Rotated cars" + Cars(carLine));