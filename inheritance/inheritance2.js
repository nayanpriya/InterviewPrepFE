function Shape(name, sides, sidelength) {
    this.name = name;
    this.sides = sides;
    this.sidelength = sidelength;
}

Shape.prototype.calcPerimeter = function () {
    console.log("permiter of shape is ")
    return this.sides * this.sidelength
}

var square3 = new Shape('square', 4, 5)
console.log(square3.calcPerimeter())

var triangle = new Shape('triangle', 3, 3)
console.log(triangle.calcPerimeter())

  ///// by class methods /////