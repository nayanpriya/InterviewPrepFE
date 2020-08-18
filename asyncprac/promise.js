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

