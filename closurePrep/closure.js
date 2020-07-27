var globalVar = "abc";

// Parent self invoking function 
(function outerFunction(outerArg) { // begin of scope outerFunction
    // Variable declared in outerFunction function scope 
    var outerFuncVar = 'x';
    // Closure self-invoking function 
    (function innerFunction(innerArg) { // begin of scope innerFunction
        // variable declared in innerFunction function scope
        var innerFuncVar = "y";
        console.log(
            "outerArg = " + outerArg + "\n" +
            "outerFuncVar = " + outerFuncVar + "\n" +
            "innerArg = " + innerArg + "\n" +
            "innerFuncVar = " + innerFuncVar + "\n" +
            "globalVar = " + globalVar);

    })(5)// end of scope innerFunction)(5); // Pass 5 as parameter 
})(7)// end of scope outerFunction )(7); // Pass 7 as parameter 


//console.log(mul(2)(3)(4)); // output : 24 
//console.log(mul(4)(3)(4)); // output : 48

function mul(a) {
    return function (b) {
        return function (c) {
            console.log(a)
            return a * b * c;
        }
    }
}
console.log(mul(2)(3)(4));
console.log(mul(2)(3)(4));