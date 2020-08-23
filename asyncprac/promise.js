/// cleaning of room by promise

let promiseToClean = new Promise((resolve, reject) => {
    let isClean = true;

    if (isClean) {
        resolve('cleaned')
    } else {
        reject('chi chi')
    }
})
// promiseToClean.then((fromResolve) => {
//     console.log(fromResolve)
// }).catch((fromReject) => {
//     console.log(fromReject)
// })

/// remove garbage 

let removeGarbage = function (message) {
    return new Promise((resolve, reject) => {
        resolve(message + ' removed garbage')
    })
}

let winIcecream = function (message) {
    return new Promise((resolve, reject) => {
        resolve(message + ' got icecream')
    })
}

// promiseToClean.then((data) => {
//     return removeGarbage(data)
// })
//     .then((data) => {
//         return winIcecream(data)
//     })
//     .then((data) => {
//         console.log('finished ' + data)
//     })

// all promises in parallel -- not want to wait for one to finish 

Promise.all([promiseToClean, removeGarbage(), winIcecream()]).then(() => console.log('all finished'))


// if we want one of them is to finished

Promise.race([promiseToClean, removeGarbage(), winIcecream()]).then(() => console.log('one of them  finished'))

//creating async function through settimeout by promise

function promisePrac() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const a = 1
            const b = 2
            const c = a + b
            if (c == 3) {
                console.log("I m right")

            } else {
                console.log("I m wrong")
            }
            resolve(c)
        }, 1000)


    })
    return promise

}

// calling promise function 

promisePrac().then((data) => {
    anotherFunction(data)
})


// another function that needs to be run after the sucess 

function anotherFunction(data) {
    console.log(data)
}

