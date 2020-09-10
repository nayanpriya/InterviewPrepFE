let array = [1, 3, 4, 5, [8, 9, 0]] // o/p =[1 , 3 , 4 , 5 ,8 , 9 , 10]

function flattenArray(array) {
    return array.reduce((acc, ele) => {
        // return acc.concat(Array.isArray(ele) ? flattenArray(ele) : ele);
        if (ele instanceof Array) {
            console.log(acc)
            return acc.concat(flattenArray(ele))
        }
        else {
            console.log(acc)
            return acc.concat(ele)
        }
    }, [])

}

console.log(flattenArray(array))