


function sorted() {
    let array1 = [10, 3, 4, 23, 12, 1, 34, 5];
    let swapped;
    let done = false
    let swap = 0
    while (!done) {
        swapped = 0;
        for (var i = 0; i < array1.length; i++) {
            if (array1[i] > array1[i + 1]) {
                swap = array1[i]
                array1[i] = array1[i + 1]
                array1[i + 1] = swap
                swapped = 1
            }
        }
        if (swapped === 0) {
            done = true
        }

    }
    return array1
}
console.log(sorted())



var arr = [1, 2, 4, 5, 10, 6, 3]
function removeEven(arr) {
    var arrayOdd = []
    for (each in arr) {
        if (arr[each] % 2 !== 0) {
            arrayOdd.push(arr[each])
        }
    }
    return arrayOdd;
}

console.log(removeEven(arr))

// using filter

function filterOdd() {

    var arr = [1, 2, 4, 5, 10, 6, 3]
    return arr.filter((element) => element % 2 !== 0)
}

console.log(filterOdd())

//merged sorted array consisting of all elements of both input arrays.


function mergeArray() {
    let swap = 0
    let done = false;

    var arr1 = [1, 3, 4, 5]
    var arr2 = [2, 6, 7, 8]

    // will make 1 array 
    const len = arr2.length;
    for (var i = 0; i < len; i++) {
        arr1.push(arr2[i])
        console.log(arr1)
    }

    while (!done) {
        let swapped = 0
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] > arr1[i + 1]) {
                swap = arr1[i]
                arr1[i] = arr1[i + 1]
                arr1[i + 1] = swap
                swapped = 1
            }
        }
        if (swapped == 0) {
            done = true;
        }
        console.log(arr1)
    }
    return arr1
}
mergeArray()

// by using inbuit function -- use recursive and do it 
function inbuiltMethod() {
    var arr1 = [1, 3, 4, 5]
    var arr2 = [2, 6, 7, 8]
    // arr1.push(arr2)
    // console.log(arr1)
    // var array3 = []
    // return arr1.reduce((acc, ele) => {
    //     console.log(ele)
    //     if (ele instanceof Array) {

    //     }

    // }, 0)

    var arry = [...arr1, ...arr2]
    console.log(arry)
    return arry.sort((a, b) => { return a - b })

}
console.log(inbuiltMethod())

// array and sum is target

// function twoSums(nums, target) {
//     let sum = 0
//     var sumArray = []
//     for (var each in nums) {
//         if (nums[each] < target) {
//             sum += nums[each]
//             sumArray.push(each)
//             if (sum === target) {
//                 return sumArray
//             }
//         }

//     }
// }

// var nums = [2, 1, 6, 11, 13]
// function twoSums(nums, target) {
//     const compMap = new Map()
//     const len = nums.length;
//     for (var i = 0; i < len; i++) {
//         if (target - nums[i] > 0) {
//             compMap[target - nums[i]] = i
//         }

//     }
//     console.log(compMap)
// }
// console.log(twoSums(nums, 9))

