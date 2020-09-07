const { performance } = require("performancenow")

// const getToDo = (callback) => {
//     setTimeout(() => {
//         callback('nayan') // calling callback function and passing the data
//     }, 2000)
// }

const { reject } = require("lodash")


// function display() {
//     getToDo(function abc(text) { console.log(text) }) //<--- abc is callback function 
// }



const getToDo = (callback) => {
    setTimeout(() => { callback({ text: 'nayan' }) }, 2000)
}

function display() {
    getToDo((obj) => { console.log(obj.text) })
}

display()

// promise question

// function func1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { resolve("Hello") }, 1000)
//     })
// }

// function func2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(50))
//     }, 1000)
// }

// func1().then((result) => {
//     console.log(result)
//     return func2()
// }).then((result2) => {
//     console.log(result2)
//     return result2 % 10
// }).then(function (result3) {
//     console.log(result3);
// });

// function EvenOrOdd(num) {
//     return new Promise((resolve, reject) => {
//         if (typeof num !== 'number') { reject('error ') }

//         if (num % 2 === 0) {
//             setTimeout(() => { resolve('even') }, 2000)
//         }
//         else {
//             setTimeout(() => { resolve('odd') }, 1000)
//         }


//     })
// }
// function test(number) {
//     let data;
//     return EvenOrOdd(number)
//         .then((data) => {
//             return data;
//         }).catch((data) => {
//             return data;
//         })
// }
// test('ab').then((data) => console.log(data))

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Func1")
        }, 1000)
    })
}

function func2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Func2")
        }, 2000)
    })
}


func1()
    .then(func2())
    .then(function (result) {
        console.log(result);
    });

// print 0-9 sequentially considering waiting period

const sleep = function (i, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i)
        }, ms)
    })
}
async function print() {
    for (let i = 0; i < 10; i++) {
        var data = await sleep(i, Math.random() * 1000)
        console.log(data)
    }
}

print()

// multiply 2 nos 

function func12(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('here i am ')
            resolve(num)
        }, 1000)
    })
}

async function multiply(num) {
    const x = await func12(10)
    const y = await func12(20)
    return num * x * y
}
// async function multiply(num) {
//     const x = func12(10)
//     const y = func12(20)
//     return num * await x * await y // this takes lesser time compared to above as it is working concurrently
// }

// function calculateTime() {
//     const t0 = performance.now()
//     multiply(10).then((data) => { console.log(data) })
//     const t1 = performance.now()
//     console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
// }

console.log(multiply(10).then((data) => { console.log(data) }))

