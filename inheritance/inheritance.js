
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



