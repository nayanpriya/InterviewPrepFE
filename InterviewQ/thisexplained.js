this.table = 'window table'
// console.log(window.table)

this.garage = {
    table: 'garage table',
    cleanatable() {
        console.log(`cleaning ${this.table}`)
    }
}

console.log(this.garage.table)

// this inside an object

let johnRoom = {
    table: 'john table',
    cleanatable() {
        console.log(`cleaning ${this.table}`)
    }
}
console.log(johnRoom.table)
johnRoom.cleanatable()
this.garage.cleanatable()

// this inside a fnction