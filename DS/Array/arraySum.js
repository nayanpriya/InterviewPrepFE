const { has } = require("lodash")

// array and sum is target
let nums = [1, 21, 3, 14, 5, 60, 7, 6]
let value = 81
function twoSums(nums, value) {
    var compArray = []
    let pairFound = false;
    const compMap = new Map()
    for (i = 0; i < nums.length; i++) {
        if (compMap.has(nums[i])) {
            compArray.push(compMap.get(nums[i]))
            compArray.push(i)
            pairFound = true
        }
        else {
            compMap.set(value - nums[i], i)
        }

    }
    if (pairFound) {
        return compArray
    }
    else {
        return false;
    }


}


console.log(twoSums(nums, value))

