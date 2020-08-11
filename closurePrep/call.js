var obj = { name: "Niladri" };

var greeting = function (a, b, c) {
    return "welcome " + this.name + " to " + a + " " + b + " in " + c;
};

// .call()

console.log(greeting(obj, "Newtown", "KOLKATA", "WB"))
console.log(greeting.call(obj, "Newtown", "KOLKATA", "WB"))

//.apply()


var args = ["Newtown", "KOLKATA", "WB"];
console.log(greeting.apply(obj, args))

// .bind()

//creates a bound function that has same body and parameters 
var boundFunction = greeting.bind(obj);
console.log(boundFunction)

console.log(boundFunction("Newtown", "KOLKATA", "WB"))

// to clone an object 

var cloningObject = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};
var clonedObject = Object.assign({}, cloningObject)
clonedObject.a = 8;
clonedObject.c.age = 100;
console.log(clonedObject)
console.log(cloningObject)

// only json under json does deep copying not above json like a wont be connected to clone but age will be 
// to connect a we can do following 




