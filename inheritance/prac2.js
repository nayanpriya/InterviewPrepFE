// extending constructor 

const Mammal = function (legs) {
    this.legs = legs
}

Mammal.prototype = {
    walk() {
        return 'walking'
    },
    sleep() {
        return 'sleeping'
    }
}

let Bat = function (legs, isvegeterian) {
    // calling mammal constructor like calling super 
    Mammal.call(this, legs) // setting this.legs from Mammal
    this.vegeterian = isvegeterian

}
console.log(Bat)

Bat.prototype = Object.create(Mammal.prototype)// set a reference in Bat prototype of mammal prototype , inheriting all methods of mammal

Bat.prototype.constructor = Bat

Bat.prototype.fly = function () {
    return 'flyong'
}

let fruitBat = new Bat(4, true)
console.dir(fruitBat)