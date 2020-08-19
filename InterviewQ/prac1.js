console.log(2 + '2')
console.log(2 - '2')

let nums = [1, 2, 2, 3]
// return unique nos 
console.log([...new Set(nums)])

// let func = function () {
//     {
//         let l = 'let'
//         var v = 'var'
//     }

//     console.log(v)
//     console.log(l)
// }



// make var v not defined as well  // use self invocation function
let func = function () {
    {
        (function () {
            let l = 'let'
            var v = 'var'
        })()

    }

    console.log(v)
    console.log(l)
}
// func()

console.log(5 < 6 < 7) // true < 7 // 1 < 7 // true
console.log(7 > 6 > 5) // true > 5 // 1 > 5 // false

let profile = { name: 'nayan' }



// question is prevent user to add age in profile object

// Object.freeze(profile) // allow neither add nor modify prop in object
Object.seal(profile) /// doesnt allow to add new prop but modify prop
profile.age = 3
console.log(profile)

// question is to prevent user to add age in profile object but modify name 

profile.name = 'priya'
console.log(profile)

let profileMayra = { name: 'Mayara' };

Object.defineProperty(profileMayra, 'age',
    {
        value: 3,
        writable: false
    })
console.log(profileMayra)
profileMayra.name = 'singh'
profileMayra.age = '4'
console.log(profileMayra)


console.log(Math.max(1, 2, 3))
console.log(Math.max())

let a = [1, 2, 5, 2, 1, 8]

// unique value in array

// let b = []
// METHOD 1

// a.forEach(item => {
//     if (b.indexOf(item) === -1) {
//         b.push(item)
//     }
// })

// console.log(b)  // complexity == n^2

/// method2  // complexity == log n // as no iterating of array b

// a.sort()
// let temp;
// a.forEach(item => {
//     if (item !== temp) {
//         b.push(item)
//         temp = item
//     }
// })

// console.log(b)


// method 3
// obj = {}
// for (let i of a) {
//     obj[i] = true
// }
// console.log(obj)
// let b = Object.keys(obj)
// console.log(b)


// for (let i of a) {
//     console.log(i)

// }
// for (let i in a) {
//     console.log(a[i])

// }

// using set -- METHOD 4

console.log([...new Set(a)])