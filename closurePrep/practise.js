const { min } = require("lodash")

var obj = { num: 2 }
var obj2 = { num: 5 }

var addToThis = function (a, b, c) {
    return this.num + a + b + c
}

console.log(addToThis.call(obj, 3, 4, 5)) // functionNamewhichwewnattoexecute.call(objectName , args of the function)
console.log(addToThis.apply(obj, [3, 4, 5]))
// console.log(addToThis.apply(obj2, [3, 4, 5])) // in this 'this' of addToThis will take obj2, thats' why we have .bind to bind obj to method
var boundFunction = addToThis.bind(obj)  // functioName.bind(obj)
console.log(boundFunction(3, 4, 5))  //bound(arg1 , agr2 , arg3)


/////convert args to array (1, 2, 3) to [1, 2, 3]

let argsToArray = function () {
    // console.log(arguments)
    console.log([].slice.call(arguments));
}
argsToArray(1, 2, 3)

// inheritance

let Mammal = function (legs) {
    this.legs = legs
}

let Cat = function (legs, isDomesticated) {
    Mammal.call(this, legs)
    this.isDomesticated = isDomesticated
}

const Lion = new Cat(4, false)
console.log(Lion)

/////

let numArray = [1, 2, 3]
console.log(Math.min(numArray))  // math.min works only on args not on array
console.log(Math.min(1, 2, 3))

var test = Math.min.apply(null, numArray) // .apply converts array to arguments
console.log(Math.min(test))


/////

let Button = function (content) {
    this.content = content

}

Button.click = function () {
    console.log(`{this.content} clicked`)
}

let newButton = new Button('add')

// let looseClicked = newButton.click;
// console.log(looseClicked)

// let boundButton = newButton.click.bind(newButton)
// boundButton()


////// 
let myObj = {
    asyncGet(cb) {
        cb()
    },
    parse() {
        console.log('parsed')
    },
    render() {
        // that = this
        // this.asyncGet(() => that.parse())
        this.asyncGet(function () { this.parse() }.bind(this))
    }
}
myObj.render()


function bind(multiply, obj) {
    return multiply.bind(obj)
}

function multiply(a) {
    console.log(this.val * a.val2);
}

var obj = { val: 2 }
function callingBind() {
    const bindFunc = bind(multiply, obj)
    bindFunc.call(this, { val2: 2 })
}

callingBind()




