var arrayList = [1, 2, 3];
//to find our if an object is array
if (Object.prototype.toString.call(arrayList) === '[object Array]') {
    console.log('Array!');
}


var x = 1;
var output = (function () {
    delete x;
    return x;
})();

console.log(output)

var x1 = { foo: 'bar' };
var fooOutput = (function () {
    delete x1.foo;
    return x1.foo;
})();

console.log(fooOutput)


// protype of Object --Object.create(objName)
prototype()
function prototype() {
    var employee = { company: "bar" };
    var employee1 = Object.create(employee);
    console.log(employee)
    console.log(employee1)
    console.log(employee1.hasOwnProperty('company'))
    // console.log(employee1._proto_.company) -- run on dev Tool
}


var trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(delete trees[3]);
console.log(trees)

var z = 1;
y = z = typeof y;
console.log(y);  // undefined

var z = 1;
var y;
y = z = typeof y;
console.log(y); // now string will come as it is declared


/// instance of 
function Animal(name, sound) {
    this.name;
    this.sound;
}
var dog = new Animal(); // constructor 
console.log(dog instanceof Animal) ///Here dog instanceof Animal is true since dog inherits from Animal.prototype.

var name = new String("xyz");
console.log(name instanceof String)


console.log(sum(2, 3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

function sum(a, b) {
    if (b !== undefined) {
        return a + b
    } else {
        return function (b) {
            return a + b;
        }
    }

}



