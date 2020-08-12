var car = {
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function (ownerName) {
        console.log(this.registrationNumber + " " + this.brand);
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brandl)
    }
}


car.displayDetails()

//The bind() method creates a new function where “this” refers to the parameter in the parenthesis in the above case “car”. 
//This way the bind() method enables calling a function with a specified “this” value

var myCarDetails = car.displayDetails.bind(car);
myCarDetails()

//if to pass param in function

var myCarDetailsAgain = car.displayDetails.bind(car, 'Nayan')
