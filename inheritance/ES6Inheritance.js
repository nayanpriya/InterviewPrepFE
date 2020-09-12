class Vehicle {
    constructor(fuel) {
        this.fuel = fuel;
    }
    turnOn() {
        console.log(this.fuel + "turned on");
    };
    turnOff() {
        console.log("turned off");
    };
}


class Car extends Vehicle {

    constructor(fuel, isparked) {
        super(fuel)
        this.isparked = isparked
    }

    turnOn() {
        if (this.fuel < 500) {
            console.log('Refill Fuel')
        }
        else {
            super.turnOn()
        }
    };
    turnOff() {
        if (this.isparked == true) {
            super.turnOff()
        }
        else {
            console.log('car not parked')
        }
    };


}
var car1 = new Car(1000, true)
var car2 = new Car(400, true)
var car3 = new Car(1500, false)
car1.turnOn()
car1.turnOff()
car2.turnOn()
car2.turnOff()
car3.turnOn()
car3.turnOff()


function Human() {
    this.name = "Tommy"
    this.sex = "Male"
}

Human.prototype.getName = function () {
    return this.name
}

class Child extends Human {
    constructor() {
        super()
    }

}

const child = new Child()
console.log(child.getName());

Human.prototype.getName = function () {
    return "new Function"
}
console.log(child.getName());
Child.prototype.getName = function () {
    return "again new Function"
}
console.log(child.getName());

// class Animal {
//     constructor() { }
//     static count = 0;

//     static increaseCount() {
//         this.count += 1;
//     }

//     static getCount() {
//         return this.count;
//     }
// }

// function test() {
//     Animal.increaseCount();
//     console.log(Animal.getCount());
// }
// test()

// class Burger {
// }
// class Vegetables extends Burger {
//     constructor() {
//         super()
//     }

//     veggies() {
//         return "Choose Veggies"
//     }
// }
// class Meat extends Burger {
//     constructor() {
//         super()
//     }
//     meat() {
//         return "Choose Meat"
//     }
// }


// class Sauces extends Burger {
//     constructor() {
//         super()
//     }
//     choosingSauces() {
//         return "Choose Sauces"
//     }
// }

// function combineClasses() { }



// var mcD = new Burger()
// console.log(mcD.choosingSauces())
let me = {
    name: "Robin",
    getName: function () {
        console.log(this.name);
    }
}

var getMyName = me.getName.bind(me);
getMyName();