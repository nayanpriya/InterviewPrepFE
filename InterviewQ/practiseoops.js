length = 10;
function func() {
    console.log(this.length);
}

var obj = {
    length: 5,
    thisFunc: function (func) {
        console.log(this.length)
        func();
        console.log(arguments[0])
        console.log(arguments[1])
        arguments[0]();
    }
};

obj.thisFunc(func, 3);