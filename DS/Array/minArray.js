let arr = [9, 2, 3, 6]

// function findMinimum(arr) {
//     const len = arr.length
//     let swap;
//     let isDone = false

//     while (!isDone) {
//         let swapped = 0;
//         for (var i = 0; i < len; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 swap = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = swap
//                 swapped = 1

//             }

//         }
//         if (swapped == 0) {
//             isDone = true;
//         }
//         console.log(arr)

//     }

//     return arr[0];
// }


// do it with sort function

// function findMinimum(arr) {
//     arr.sort((a, b) => a - b)
//     return arr[0]
// }

function findMinimum(arr) {
    let currentMin = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < currentMin) {
            currentMin = arr[i]
        }
    }
    return currentMin;
}



console.log(findMinimum(arr))