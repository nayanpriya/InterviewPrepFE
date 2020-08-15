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