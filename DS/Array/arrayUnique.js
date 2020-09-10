const arr = [2, 3, 2, 6, 6]

function findFirstUnique(arr) {
    let temp;
    for (var i = 0; i < arr.length; i++) {
        let foundSimilar = false
        let found = 0
        temp = arr[i]
        console.log('outer')
        console.log(temp)
        while (!foundSimilar) {
            for (var j = 0; j < arr.length; j++) {
                if (i !== j) {
                    console.log('temp')
                    console.log(temp)
                    console.log(arr[j])
                    if (temp === arr[j]) {
                        foundSimilar = true;

                    }

                }
            }

            break;
        }
        if (foundSimilar === false) {
            console.log('here')
            console.log(temp)
        }




    }


}
findFirstUnique(arr)