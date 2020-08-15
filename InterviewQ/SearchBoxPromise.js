const searchList = ["apple", "app", "ape"];

function autocompleteText() {
    getUserInput().then(searchText => {
        return getAutoCompleteData()
    }).then((data) => {
        return autoCompleteDataProcessing(searchText, data)
    }).then((data) => {
        renderSuggestions(data);
    })
}

function getUserInput() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            var searchval = document.getElementById('serachvalue').value
            resolve(searchval);
        }, 200)

    })
    return promise


}

function getAutoCompleteData() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(searchList)
        }, 200)
    })
    return promise
}

function autoCompleteDataProcessing(searchText, searchListSuggestion) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            var serachedResult = searchListSuggestion.map((item) => {
                return item + "" + searchText;
            });
            resolve(serachedResult)
        }, 200)
    })
    return promise
}

function renderSuggestions(data) {
    var searchBox = document.getElementById('searchedresult')
    for (var each in data) {
        var li = document.createElement("li");
        li.append(data[each])
        searchBox.append(li)
    }
}