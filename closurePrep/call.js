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
