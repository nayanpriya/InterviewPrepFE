/// promise.all(it waits to execute untill all promisese  are ready -- takes an array and return new promise)

function promiseTest() {
    let promise =
        Promise.all([new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("1")
            }, 1000)
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("2")
            }, 6000)
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("3")
            }, 3000)
        })])

    return promise
}


promiseTest().then(data => {
    console.log(data)
})