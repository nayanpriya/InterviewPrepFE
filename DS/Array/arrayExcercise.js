//Write a JavaScript function to check whether an `input` is an array or not.

function is_array(value) {
    return value instanceof Array
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//Write a JavaScript function to clone an array.

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

function array_Clone(arrayvalue) {

    return arrayvalue.slice(0)
}

