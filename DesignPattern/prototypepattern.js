const Ninja = function (name) {
    this.name = name;
    this.points = 100;

}

Ninja.prototype.kick = function kick(otherNinja) {
    if (this.points > 0 && otherNinja.points > 0) {
        otherNinja.points -= 20
        return `${otherNinja.name} points are ${otherNinja.points}`
    }
    else {
        return `Can't kick ${otherNinja.name}`
    }
}
Ninja.prototype.punch = function punch(otherNinja) {
    if (this.points > 0 && otherNinja.points > 0) {
        otherNinja.points -= 20
        return `${otherNinja.name} points are ${otherNinja.points}`
    }
    else {
        return `Can't punch ${otherNinja.name}`
    }
}
var ninja1 = new Ninja('Ninja1')
var ninja2 = new Ninja('Ninja2')
console.log(ninja1.kick(ninja2))
console.log(ninja1.punch(ninja2))
console.log(ninja2.kick(ninja1))
console.log(ninja1.kick === ninja2.kick) //both the ninja1 and ninja2 instances refer to the same punch and kick functions, instead of having their copies of each. This makes the code more memory efficient.



// const Ninja = function (name) {
//     this.name = name;
//     this.points = 100;
//     this.kick = function kick(otherNinja) {
//         if (this.points > 0 && otherNinja.points > 0) {
//             otherNinja.points -= 20
//             return `${otherNinja.name} points are ${otherNinja.points}`
//         }
//         else {
//             return `Can't kick ${otherNinja.name}`
//         }
//     }
//     this.punch = function punch(otherNinja) {
//         if (this.points > 0 && otherNinja.points > 0) {
//             otherNinja.points -= 20
//             return `${otherNinja.name} points are ${otherNinja.points}`
//         }
//         else {
//             return `Can't punch ${otherNinja.name}`
//         }
//     }

// }

// var ninja1 = new Ninja('Ninja1')
// var ninja2 = new Ninja('Ninja2')
// console.log(ninja1.kick(ninja2))
// console.log(ninja1.punch(ninja2))
// console.log(ninja2.kick(ninja1))
// console.log(ninja1.kick === ninja2.kick) 


// both the instances ninja1 and ninja2 
//get their copies of the punch and kick function upon instantiation. 
//Imagine making 1000 instances, that would mean a 1000 copies of both these functions for all 1000 instances! 
//This will easily clutter the memory.





