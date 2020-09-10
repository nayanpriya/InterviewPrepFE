let arr = [2, 2, 3, 4] // ---------------o/p [ 24, 12 , 8 , 6]

function findProduct(arr) {
    const len = arr.length;

    let productArray = []
    let product = 1

    for (var i = 0; i < len; i++) {
        for (var m = 0; m < len - 1; m++) {
            product = product * arr[m + 1]
            console.log(product)

        }

        // for (var j = i; j < 1; j--) {
        //     product = product * arr[j - 1]
        //     console.log(productArray)
        // }
        productArray.push(product)
        console.log(productArray)
    }
    return productArray;
}

console.log(findProduct(arr))