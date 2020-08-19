console.log([] + []) // converts empty array to string givesempty string // add 2 nos or concat string

console.log(String([])) // typecasting empty array to string

console.log({} + [])
///// below is the answer typecast object into string aand array into string
console.log(String([]))
console.log(String({}))


//document.body.contentEditable = true;



function y() {
    console.log(this.length)
}

var x = {
    length: 5,
    method: function (y) {
        arguments[0]()
    }
}

x.method(y, 1)

