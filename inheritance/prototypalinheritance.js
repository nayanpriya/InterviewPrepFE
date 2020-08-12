/// by constructor pattern//

function Shape(name, sides, sidelength) {
    this.name = name;
    this.sides = sides;
    this.sidelength = sidelength;
}

Shape.prototype.calcPerimeter = function () {
    console.log("permiter of shape is ")
    return this.sides * this.sidelength
}

//  shape.prototype is important for instance inheritance

var square = new Shape('square', 4, 5)
console.log(square.calcPerimeter())

var triangle = new Shape('triangle', 3, 3)
console.log(triangle.calcPerimeter())





///// by object.create() /////

const person = {
    isHuman: false,
    printIntroduction: function () {

        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person)
console.log(me)
me.name = "Nayan"
me.isHuman = true;
me.printIntroduction()


