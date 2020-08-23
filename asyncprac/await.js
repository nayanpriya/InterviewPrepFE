// writing async always return promise  -- it automatically wrap in a resolved promise

async function test() {
    return 1
}
test().then(data => {
    console.log(data)
})


// await works inside async 

async function test() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done")
        }, 1000)

    })
    // here it waits till the promise settles down and return result  and use only inside async function
    let result = await promise;
    return promise

}

test().then(data => {
    console.log(data)
})


/*testing user form
hjdshdj*/




