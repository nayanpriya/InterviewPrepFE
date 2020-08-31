let instance;
class Printer {
    constructor(pages) {
        this.display = function () {
            console.log(`You are connected to the printer. You want to print ${pages} pages.`)
        }
    }

    static getInstance(numOfPages) {
        if (!instance) {
            instance = new Printer(numOfPages)
        }
        return instance;
    }

}
var obj1 = Printer.getInstance(2)
console.log(obj1)
console.log(obj1.display())
var obj2 = Printer.getInstance(4)
console.log(obj2)
console.log(obj2.display())
console.log(obj2 == obj1)

class ConfigureVals {
    constructor(obj) {
        if (obj.xpoint !== undefined && obj.ypoint !== undefined && obj.shape !== undefined) {
            this.xpoint = obj.xpoint
            this.ypoint = obj.ypoint
            this.shape = obj.shape
        }
        else {
            this.xpoint = 0;
            this.ypoint = 0;
            this.shape = null;
        }
    }


    static getConfiguration(obj) {
        if (!instance) {
            instance = new ConfigureVals(obj);
        }
        return instance;
    }
}

var configureObj = ConfigureVals.getConfiguration({ xpoint: 8, ypoint: 9, shape: 'rectangle' })
console.log(configureObj)
// console.log(configureObj.setValues())
var secondConfigureObj = ConfigureVals.getConfiguration({ xpoint: 2, ypoint: 4, shape: 'circle' })
console.log(secondConfigureObj)
// console.log(secondConfigureObj.setValues())