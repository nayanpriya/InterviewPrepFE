// rest param

function findArray(a, b, ...n) {
    console.log(a, b, n)
}

findArray(1, 2, 3, 4, 5, 6, 7, 8, 9)

// spread params

var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var arrayCopy = [...array1]
console.log(array1)
console.log(arrayCopy)

const arr = [1, 2, 3, 4];

function displayArray(arr) {
    return [...arr, 5, 6, 7]
}
console.log(displayArray(arr))

const obj = { name: 'Emily', age: 22 };
const newObj = { ...obj }
console.log(newObj)

//use destructuring to extract and display the name of the second object in the array.

const exampleObject = { collection: [{ name: "Kelly", }, { name: "Anna", }], }
const { collection: [, { name: secondObject, },] } = exampleObject
const { collection: [{ name: firstObject, },] } = exampleObject
console.log(secondObject)
console.log(firstObject)





var array = [1, 2, 3, 4, 5, 6, 7, 8] // array = [, , ..rest]


function removeFirstTwoElements() {
    const [, , ...rest] = array
    return rest

}

console.log(removeFirstTwoElements(array))

var arrLiteral = [8, 9, 10, 11, 12]
const [, , ...arr1] = arrLiteral
console.log("arr contains: " + arr1)

//You’re given a function returnNthCat, which takes a variable n and has an object state defined in it.
function returnNthCat(n) {
    const state = {
        cats: [
            { catId: 1, name: "tom" },
            { catId: 2, name: "tiggy" },
            { catId: 3, name: "leo" },
            { catId: 4, name: "nixie" }
        ],
        curpage: 3
    }

    // x = {a :1 , b :2 }  const {a :b } = x ; a = 1  //// const {a :m , b :n} = x  ; m =1 , n =2
    // const { cats,   // cats as first key if you want to keep as cats you can also do that
    //     curpage } = state
    // console.log(cats)
    // return cats[n].name

    const { cats: firstKey,   // cats as first key if you want to keep as cats you can also do that
        curpage } = state
    //const { cats: { [n]:thisCat}} = state;  const {name:thisCatName} = thisCat; return thisCatName
    console.log(firstKey)
    return firstKey[n].name
}

console.log(returnNthCat(0))

function displayName(point) {
    // const { name: n, age: a } = point || {}
    const { name: n, age: a } = {
        ...point
    }
    console.log(n)
    console.log(a)
    return n

}

// var point = { name: "jerry", age: 2 }
var point = undefined
console.log(displayName(point));

console.log(typeof NaN === "number")
console.log(typeof undefined)

var girl = {
    name: 'Nayan',
    info: { age: 20, number: 123 }
}

// const newGirl = { ...girl }
const newGirl = JSON.parse(JSON.stringify(girl))
console.log(newGirl)
newGirl.info.age = 30
console.log(newGirl.info.age, girl.info.age)