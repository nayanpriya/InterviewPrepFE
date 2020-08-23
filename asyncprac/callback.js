function printA(a) {
    console.log(a)
}


// calling callback & then passing function that needs to be called after

callbackLearning(data => {
    printA(data)
})

// defining callback function by making it async by giving set timeout 

function callbackLearning(ekFunction) {
    setTimeout(() => {
        const a = 1 + 1
        ekFunction(a)
    }, 1000)
}

// add , multiply by callback 

let add = function (a, b) {
    return a + b
}

let multiply = function (a, b) {
    return a * b
}

let doWhatever = function (a, b) {
    console.log(`here are two nos ${a} , ${b}`)
}
let calc = function (num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(2, 3, add))
console.log(calc(2, 3, doWhatever))
console.log(calc(2, 3, function (a, b) { return a - b }))

///
var myarr = [
    {
        num: 5,
        str: 'cabbage'
    },
    {
        num: 7,
        str: 'apple'
    },
    {
        num: 1,
        str: 'ban'
    }
]

// sort according to alphabets
function sortArray(myarr) {
    return myarr.sort((a, b) => {
        return a.str > b.str
    })
}


console.log(sortArray(myarr))