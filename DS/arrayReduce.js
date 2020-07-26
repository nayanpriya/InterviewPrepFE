// .reduce uses to reduce array elements to one value 

function reduceArray() {
    var array = [{ x: 1 }, { x: 2 }, { x: 4 }];

    return array.reduce(function (accum, obj) {
        console.log(accum)
        return accum + obj.x;
    }, 0);

}

console.log(reduceArray())


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(sumOfArray(numbers))
function sumOfArray(numbers) {
    return numbers.reduce((sum, value) => {
        return sum + value
    }, 0)
}

// concat nos like 12342576...
function concateAllNum(numbers) {
    return numbers.reduce((str, value) => {
        return str + value
    }, '')
}
console.log(concateAllNum(numbers))

const ageArray = [
    {
        name: "one",
        age: 2
    },
    {
        name: "two",
        age: 4
    },
    {
        name: "three",
        age: 3
    }
];



// print max age 4 in this
function findMaxAge(ageArray) {
    return ageArray.reduce(function (acc, ageDetail) {
        if (acc < ageDetail.age) {
            console.log('age' + ageDetail.age)
            return ageDetail.age
        }
        return acc
    }, 0)
}
console.log(findMaxAge(ageArray))

