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

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// total age of ages
const ageSum = ages.reduce((total, age) => {
    return total += age
}, 0)

console.log(ageSum)

// total years of all companies

const startDateTotal = companies.reduce((total, company) => {
    return total + (company.end - company.start)
}, 0)
console.log(startDateTotal)

// double age , filter for 40 , sort and then sum of all

const combined = ages.map(age => age * 2).filter(age => age > 40).sort((a, b) => a - b).reduce((a, b) => { return a + b }, 0)