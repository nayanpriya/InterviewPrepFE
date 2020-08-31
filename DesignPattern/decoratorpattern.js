// in extends one object can have 1 customisation at a time
// class SuperHero {
//     constructor(name, power) {
//         this.name = name
//         this.power = power
//     }
// }

// class SuperHeroWithSword extends SuperHero {
//     constructor(name, power) {
//         super(name, power)
//         this.sword = true
//     }
//     hasSword() {
//         return `${this.name}'s power is ${this.power}, and he also has a sword now.`
//     }
// }

// class SuperHeroWithSuperSpeed extends SuperHero {
//     constructor(name, power) {
//         super(name, power)
//         this.superSpeed = true
//     }
//     hasSuperSpeed() {
//         return `${this.name}'s power is ${this.power}, and he also has the super speed now.`
//     }
// }


// class SuperHeroWithSpeedandSword extends SuperHero {
//     constructor(name, power) {
//         super(name, power)
//         this.speedAndSword = true
//     }
//     hasSpeedAndSword() {
//         return `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`
//     }
// }

// var superhero1 = new SuperHeroWithSword("Fire Man", "Fire")
// console.log(superhero1.hasSword())

// var superhero2 = new SuperHeroWithSuperSpeed("Fire Man", "Fire")
// console.log(superhero2.hasSuperSpeed())

// var superhero3 = new SuperHeroWithSpeedandSword("Ice Man", "Ice")
// console.log(superhero3.hasSpeedAndSword())

// in decorator pattern all customisation at a single insatitaition
class SuperHero {
    constructor(name, power) {
        this.name = name
        this.power = power
    }
}



function SuperHeroWithSword(superhero1) {
    superhero1.sword = true
    superhero1.hasSword = function () {
        return `${this.name}'s power is ${this.power}, and he also has a sword now.`
    }
}


function SuperHeroWithSuperSpeed(superhero1) {
    superhero1.hasSuperSpeed = true
    superhero1.hasSuperSpeed = function () {
        return `${this.name}'s power is ${this.power}, and he also has the super speed now.`
    }
}
function SuperHeroWithSpeedandSword(superhero1) {
    superhero1.speedAndSword = true
    superhero1.hasSpeedAndSword = function () {
        return `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`
    }
}


var superhero1 = new SuperHero("Fire Man", "Fire")
console.log(SuperHeroWithSword(superhero1))
console.log(SuperHeroWithSuperSpeed(superhero1))
console.log(SuperHeroWithSpeedandSword(superhero1))