
// Inheritance ////

class Animal {
    constructor(name) {
        this.animalType = 'animal'
        this.name = name
    }

    type() {
        console.log(this.name, 'is type', this.animalType);
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}


class Dog extends Animal {
    constructor(name, collarColor) {
        super(name)
        this.name = 'Dog';
        this.collarColor = collarColor
    }
    speak() {
        console.log(this.name, 'barks.');
    }
    collar() {
        console.log(this.name, 'has a', this.collarColor, 'collar.');
    }
}


let spot = new Dog('Spot', 'red');
spot.type();
spot.speak();
spot.collar();

// by making class and using without prototype ES6 for defining functions as class
// class Cat {
//     constructor(name) {
//         this.name = name;
//     }
//     meow() {
//         console.log("cat " + this.name + " meows")
//     }
// }

// let Catty = new Cat("pussy")
// Catty.meow()


// same as above but with function  and it's prototype
function Cat(name) {
    this.name = name
}
Cat.prototype.meow = function () {
    console.log(this.name + ' says meow')
}
let catty = new Cat('catty')
catty.meow()




