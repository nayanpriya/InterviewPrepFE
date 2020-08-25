//Given an array of coins, write a function to compute the number of ways you can make that amount using those coins.

var amount = 4
var coins = [1, 2, 3]

function returnWays(coins, amount) {

    var totalWays = []
    // same coin
    coins.forEach(element => {
        var arrangedCoins = []
        if (element < amount) {
            if (amount % element == 0) {
                var times = amount / element
                for (var i = 0; i < times; i++) {
                    arrangedCoins.push(element)
                }
                totalWays.push(arrangedCoins)
            }

        }
    });

    return totalWays

}


console.log(returnWays(coins, amount))

function returnWaysForDifferentCoins(coins, amount) {
    var totalWays = []
    var arrangedCoins = []
    let total = 0;
    var remaininig;
    coins.forEach(element => {
        if (element < amount) {
            remaininig = amount - total
            if (remaininig < element) {
                if (coins.indexOf(remaininig) > -1) {
                    arrangedCoins.push(remaininig)
                }
            }
            else {
                total = total + element
                arrangedCoins.push(element)
            }
        }
    })
    totalWays.push(arrangedCoins)
    return totalWays
}

console.log(returnWaysForDifferentCoins(coins, amount))