// var and let example

let x = function () {

    if (true) {
        console.log(v)
        // console.log(l)
        var v = 1
        let l = 2
    }
    console.log(v)
    // console.log(l)
}

x()

// const c;
// c = 1;
// console.log(c)
// in const you cant reassign  , you can modify if it's object
const cd = [1, 2, 2]
cd.push(10)
console.log(cd)


// arrow function

const profile = {
    firstName: '',
    lastName: '',
    setName: function (name) {
        let splitName = (n) => {  // = function(n){}---- in this window is context with arrow function it sets context  
            let nameArray = n.split(' ')
            this.firstName = nameArray[0]
            this.lastName = nameArray[1]
        }
        splitName(name)

    }
}

profile.setName('john doe')
console.log('here')
console.log(profile.firstName)


/// Function declartion and function expression

console.log(test())  // you can access function declartion before function 
// console.log(testA())  // as it becomes a variable ,you cant access this as it's not function but function declartion
function test() {

}

let testA = function () {

}

