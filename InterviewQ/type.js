var concat = function (string1, string2) {
    switch (typeof string1 + "-" + typeof string2) {

        case "undefined-string":
            throw new TypeError('String 1 is not defined')
        case "undefined-undefined":
            throw new TypeError('Both arguments are not defined')
        case "string-undefined":
            throw new TypeError('String 2 is not defined')
        case "number-string":
            throw new TypeError('Both arguments are not string')
        case "string-number":
            throw new TypeError('Both arguments are not number')
    }
    return string1.concat(string2)
}

try {
    console.log(concat())
}
catch (e) {
    console.log(e)
}

try {
    console.log(concat("a", "b"))
}
catch (e) {
    console.log(e)
}

try {
    console.log(concat("a"))
}
catch (e) {
    console.log(e)
}

try {
    console.log(concat(1, "c"))
}
catch (e) {
    console.log(e)
}

try {
    console.log(concat(undefined, "x"))
}
catch (e) {
    console.log(e)
}

var names = ["Tom", "Anna", 2, true]
console.log(names instanceof String)
console.log(names instanceof Number)
console.log(names instanceof Object)
console.log(names instanceof Array)

var str1 = 'This is a string'
console.log(str1 instanceof String)
console.log(typeof str1)

var str2 = new String('Strishash')
console.log(str2 instanceof String)

