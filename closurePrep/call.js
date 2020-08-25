var obj = { name: "Niladri" };

var greeting = function (a, b, c) {
    return "welcome " + this.name + " to " + a + " " + b + " in " + c;
};

// .call() The call method allows for a method that was defined for one object to be assigned and called on by another object. 
//This allows for a method to get defined once and then get inherited by other objects without having to re-write it for other objects.

console.log(greeting(obj, "Newtown", "KOLKATA", "WB")) // 
console.log(greeting.call(obj, "Newtown", "KOLKATA", "WB")) // to give context of this

//.apply()


var args = ["Newtown", "KOLKATA", "WB"];
console.log(greeting.apply(obj, args))

// .bind()

//creates a bound function that has same body and parameters 
//The bind function creates a new function whose this value can be set to the value provided during the function call, enabling the calling of a function with a specified this value
// (the first parameter to bind function).
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




