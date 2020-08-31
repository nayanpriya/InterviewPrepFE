// In this problem, you need to implement a factory ToyFactory that can create a toy duck and a toy car object
// using either the ToyDuck or ToyCar function constructor.



function ToyFactory() {
    this.createToy = function (obj) {
        let toy;
        if (obj.toyType === "car") {
            toy = new ToyCar(obj.color, obj.price, obj.name)
        }
        else {
            toy = new ToyDuck(obj.color, obj.price, obj.name)
        }
        return toy;
    }
    //toy property set to ToyDuck by default
}

function ToyDuck(color, price, name) {
    this.color = color;
    this.price = price
    this.name = name;
    this.message = function () {
        return `you choose toyduck ${color} ${price} ${name}`
    }
}

function ToyCar(color, price, name) {
    this.color = color;
    this.price = price
    this.name = name;
    this.message = function () {
        return `you chose toycar ${color} ${price} ${name}`;
    }
}

var toyFactory = new ToyFactory();
var car = toyFactory.createToy({
    toyType: "car",
    color: "blue",
    price: 12,
    name: "honda"
})



// const toyduck = toyFactory.createToy('toyduck');
console.log(car.message())
