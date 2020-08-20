const Car = function () { } //// empty constructor

Car.prototype = {
    print() {
        return "I m car"
    }
}

const ToyCar = function () { }

ToyCar.prototype = Object.create(Car.prototype)

ToyCar.prototype.print = function () {
    return 'I m toycar'
}

const TransfornerCar = function () { }

TransfornerCar.prototype = Object.create(Car.prototype)

// If i remove method from transformerCar then it lookup to parent constructor chain

// TransfornerCar.prototype.print = function () {
//     return 'I m transformer'  
// }

const toyota = new Car()
const legoCar = new ToyCar()
const optimusCar = new TransfornerCar()
console.log(toyota.print())
console.log(legoCar.print())
console.dir(optimusCar.print())
console.log(optimusCar.print())

///
console.dir(Object)
// Object.create(prototypeObject, propertyObject)
const myObject = Object.create(Object.prototype)
console.log(myObject)

/// defining constructor 

const Bird = function (color) {
    this.color = color
}

const parrot = new Bird('green') // with constructor
const sparrow = Object.create(Bird.prototype) // with prototype

console.log(parrot.color)  // sets intial prop of constructor
console.log(sparrow.color) // doesnt set intial prop of constructor

console.dir(parrot.color)
console.dir(sparrow.color)

// inherting one constructor to other

// const Car = function (color) {
//     this.color = color;
// }

// Car.prototype = {
//     getColor() {
//         return this.color()
//     }
// }
// const ToyCar = function () {

// }

// // ToyCar to have all the props and methods of Car  ///  refering proto of toycar to car

// ToyCar.prototype = Object.create(Car.prototype)
// const legoCar = new ToyCar()
// console.log(legoCar)
// console.log(legoCar instanceof ToyCar)
// console.log(legoCar instanceof Car)
// console.log(legoCar instanceof Object)
// console.log(ToyCar.prototype.isPrototypeOf(legoCar))
// console.log(Car.prototype.isPrototypeOf(legoCar))
// console.log(ToyCar.prototype.isPrototypeOf(Car))
// console.log(Object.prototype.isPrototypeOf(legoCar))

// Object.create() helps to extend constructor 
// in classical inheritance , you copy all methode from super to sub but in prototypal you set a reference from sub to base class , so you dont copy 

