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


///
function func1(name) {
    this.name = name
}

var obj1 = new func1("Cliton");
// func1.prototype = {              // prototype
//     talk: function () {
//         console.log(this.name + " talk")
//     }
// }
func1.prototype.talk = function () {   // prototype property 
    console.log(this.name + " talk")
}

function display() {
    var obj2 = new func1("Jon")
    obj1.talk()
    obj2.talk();
}

display()

//
function Human(name, age) {
    this.name = name;
    this.age = age;
};

function Man(name) {
    Human.call(this, name)
};

Man.prototype = Object.create(Human.prototype);


function check() {
    var obj = new Man("Tommy Tan");
    console.log(obj.name)
    console.log(obj instanceof Human)
}
check()