function checkParentheses(parenthesIsStringVal) {
    let parenthesisMap = new Map()
    parenthesisMap.set("{", "}");
    parenthesisMap.set("[", "]");
    parenthesisMap.set("(", ")");
    console.log(parenthesisMap)
    let complimentaryItem;

    var parenthesIsString = parenthesIsStringVal.replace(/ /g, "")
    var parenthesisStack = []
    for (var i = 0; i < parenthesIsString.length; i++) {
        if (complimentaryItem && parenthesIsString[i] == complimentaryItem) {
            parenthesisStack.pop();
            if (parenthesisStack.length > 0) {
                var stackpItem = parenthesisStack[parenthesisStack.length - 1]
                complimentaryItem = parenthesisMap.get(stackpItem)
            }
            console.log(complimentaryItem)
        }
        else {
            complimentaryItem = parenthesisMap.get(parenthesIsString[i])
            parenthesisStack.push(parenthesIsString[i])
        }
        console.log(parenthesisStack)

    }

    console.log(parenthesisStack)
    if (parenthesisStack.length === 0) {
        return true
    }
    return false

}

// console.log(checkParentheses("{[]()}"))
console.log(checkParentheses("{[(])}"))

///Where to Insert

var array = [10, 5, 1, 3]
var num = 2;

const getIndex = ((array, num) => {
    var newArray = array.sort()
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] < num) {
            return (i + 1)
        }
    }

})

console.log(getIndex(array, num))

const getIndexByAccumulator = ((array, num) => {
    return array.reduce((acc, currrentval) => {
        // console.log(acc)
        return currrentval < num ? ++acc : acc
    }, 0)

})

console.log(getIndexByAccumulator(array, num))