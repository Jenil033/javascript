class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Create an instance of the Rectangle class
const myRectangle = new Rectangle(10, 5);

// Calculate the area and perimeter
const area = myRectangle.calculateArea();
const perimeter = myRectangle.calculatePerimeter();

console.log(`Area: ${area}, Perimeter: ${perimeter}`);
