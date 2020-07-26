var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbersLessThan9(numbers))
console.log(someNumbersLessThan9(numbers))
// returns true or false
function numbersLessThan9(numbers) {
    return numbers.every(function (item) {
        return item > 0
    })
}
function someNumbersLessThan9(numbers) {
    return numbers.some(function (item) {
        return item > 0
    })
}

function arrowNumbersLessThan9() {
    return numbers.every(item => {
        item < 9
    })
}
// returns all odd nos 

function findOddNo(numbers) {
    return numbers.filter(number => {
        if (number % 2 == 1) { return number }

    })

}

console.log(findOddNo(numbers))

function forEachArrayPrac(numbers) {
    return numbers.forEach(number => {
        console.log(number)
    })
}

forEachArrayPrac(numbers)


//// add 1 tpo every element

function addElementToMap(numbers) {
    return numbers.map(number => number * 2)
}

console.log(addElementToMap(numbers))
console.log(numbers)