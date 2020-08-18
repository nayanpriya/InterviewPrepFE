//Print the letters A, B, C in that order in callback , Promise , Async / Await
// callback 

function printLetter(string, callback) {
    setTimeout(() => {
        callback(string)
    }, 1000)
}


printLetter("A", data => {
    console.log(data)
    printLetter("B", data => {
        console.log(data)
        printLetter("C", data => {
            console.log(data)
        })
    })
})

// promise 


function printLetterPromise(string) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(string)
            console.log(string)
        }, 1000)

    })
    return promise
}



printLetterPromise("A").then((data) => {

    return printLetterPromise("B")
})
    .then((data) => {

        return printLetterPromise("c")
    }).then((data) => {

    })


// using async await 



async function printLetters() {
    await printLetterPromise("A1")
    await printLetterPromise("B1")
    await printLetterPromise("C1")
}

printLetters()


////////Print the array of list [A, B, C] in the order

function printArray() {
    const arr = ["X", "Y", "Z"]
    let index = -1
    printLetterOfArray(arr[++index], () => {
        printLetterOfArray(arr[++index], () => {
            printLetterOfArray(arr[++index], () => {
            })
        })
    })
}

function printLetterOfArray(string, callback) {
    setTimeout(() => {
        console.log(string)
        callback()
    }, 1000)
}

printArray()

//(Q3) Print the array of alphabets [A … Z] in the order

function printAlphbets() {
    let array =
        [...Array(26)].map((val, i) => {
            return String.fromCharCode(i + 65)
        })

    let index = 0;
    setTimeout(function test() {
        if (index < 27) {
            printLetterFromAlphabets(array[index++], index, (err, str) => {

                if (err) {
                    console.log('done');
                    return
                }
                console.log(str);
            })
            test()
        }

    }, 1000)

}


function printLetterFromAlphabets(string, index, cb) {

    if (index == 27) {
        cb('err')
    }
    cb(null, string)

}

printAlphbets()

// //Make Callback API Request for a given number of times
// request(5, callback)
// function request(var retries, var callback) {
//     axios.post("URL").then(() => {
//         response => {
//             if (response.data == 1) {
//                 callback(response)
//             }
//         }
//     })
// }