
// [1,2,3,4]
// [3,4,1,2]

var arr = [1, 2, 3, 4]
console.log(shiftArr(arr))

function shiftArr(arr) {
    let newArr = arr;
    for (var i = 0; i < arr.length - 2; i++) {
        var newIndex = i + 2;
        let temp = newArr[i]

        newArr[i] = newArr[newIndex]
        newArr[newIndex] = temp

    }
    return newArr;
}




