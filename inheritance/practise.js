class Vehicle {

    constructor() {
        var speed = "100"
        var model = "Tesla"
    }
}

class Car {
    constructor() {
        var speed = "100"
        var model = "Tesla"
    }
}

// var car = new Car();

// console.log(car instanceof Vehicle)

var car = new Vehicle()
console.log(car instanceof Vehicle)


class Rabbit { }
var rabbit = new Rabbit()
console.log(rabbit instanceof Rabbit)


function Rabbit1() { }

console.log(new Rabbit1() instanceof Rabbit1)

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true