const searchList = ["apple", "app", "ape"];

function autocompleteText() {
    getUserInput((searchText) => {
        getAutoCompleteData((data) => {
            autoCompleteDataProcessing(searchText, data, (processedData) => {
                renderSuggestions(processedData);
            })
        });
    })
}

// const ekfunction = (data) => {
//     var processedData = autoCompleteDataProcessing(searchText, data);
//     renderSuggestions(processedData);
// }
// ekfunction('a')



function getUserInput(teesraFunction) {
    setTimeout(() => {
        var searchval = document.getElementById('serachvalue').value
        teesraFunction(searchval)
    }, 100)

}

function getAutoCompleteData(ekfunction) {
    setTimeout(() => {
        ekfunction(searchList)
    }, 200)

}

function autoCompleteDataProcessing(searchText, searchListSuggestion, dusraFunction) {
    setTimeout(() => {
        var searchedList = searchListSuggestion.map((item) => {
            return item + "" + searchText;
        });
        dusraFunction(searchedList)
    }, 200)
}

function renderSuggestions(data) {
    var searchBox = document.getElementById('searchedresult')
    for (var each in data) {
        var li = document.createElement("li");
        li.append(data[each])
        searchBox.append(li)
    }
}