'use strict'

// var getA = function (a) {
//     return a
// }

var getA = (a) => { return a }

console.log(getA(5))


// var x = function () {
//     var that = this
//     this.val = 1;
//     setTimeout(function () {
//         that.val++;
//         console.log(that.val)
//     }, 1000)
// }

// var xx = new x()

var x = function () {
    this.val = 1;
    setTimeout(() => {
        this.val++
        console.log(this.val)
    }, 1000)
}
var xx = new x()

// var args = function () {
//     console.log(arguments[0])
// }



var args = (...n) => {
    console.log(n[0])
}

args(1, 2, 3)