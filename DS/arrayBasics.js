const { forEach, slice } = require("lodash")

var arrayTest = [1, 2, 10, 18]
console.log(Array.isArray(arrayTest))
console.log(arrayTest instanceof Array)
// console.log(arrayTest.shift())
// console.log(arrayTest.unshift(6))
// console.log(arrayTest.push(-6))
// console.log(arrayTest.pop())
console.log(arrayTest.slice(0, 2))
console.log(arrayTest)
//.splice mutable , removes from , count provided and number that needs to be replaced with the deleted one
console.log(arrayTest.splice(0, 2, 4))
console.log(arrayTest)

var people = ["Greg", "Mary", "Devon", "James"];
//Using a loop, iterate through this array and console.log all of the people.
looping();
function looping() {
    for (var i in people) {
        console.log(people[i])
    }
}
loopingForEach(people);
function loopingForEach(people) {
    people.forEach(person => {
        console.log(person)
    })
}
createNewArray()
function createNewArray() {
    var d = {}
    console.log(Object.keys(d))
    var fruits = ["nayan", "priya", "soma"];
    fruits.forEach((fruit, index) => {
        console.log(fruit)
        console.log(index)
        d[index] = undefined
        console.log(d)
    })
    console.log(Object.keys(d))
}
/// object.keys
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.keys(object1))


forLoop(people)
function forLoop(people) {
    for (var i = 0; i < people.length; i++) {
        console.log(people[i])
    }
}

console.log(people.shift());
console.log(people.pop())
console.log(people.unshift("Matt"))
console.log(people.push("Nayan"))
console.log(people)
//Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
maryLoop();
function maryLoop() {
    for (var i = 0; i < people.length; i++) {
        if (people[i] === "Mary") {
            console.log(people[i])
            return true
        }
    }
}
//Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
sliceArray(people)
function sliceArray(people) {
    console.log(people.slice(2, 4))
    console.log(people)
}

//Write the command that gives the indexOf where "Mary" is located.
indexOfMary(people)
function indexOfMary(people) {
    console.log(people.indexOf("Mary"))
}

//Write the command that gives the indexOf where "Foo" is located (this should return -1).
findFoo(people)
function findFoo(people) {
    console.log(people.indexOf("foo"))
}
//Redefine ["Greg", "Mary", "Elizabeth", "Artie", "James"].
addNewMem(people)
function addNewMem(people) {
    people.splice(2, 1, "Elizabeth", "Artie")
    console.log(people)
}

//Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
['Matt', 'Mary', 'Elizabeth', 'Artie', 'Nayan'] + "Bob"
var withBob = people;
withBob = people + ",Bob"
console.log(withBob)