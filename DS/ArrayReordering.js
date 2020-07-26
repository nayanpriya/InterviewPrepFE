//reverse the string

var string = "Welcome to this Javascript Guide!";
var reverseSentence = reverseWelcome(string, "")
var reverseWord = reverseWelcome(reverseSentence, " ")

function reverseWelcome(text, separator) {
    return text.split(separator).reverse().join(separator)

}

//split -(string -array ) reverse(reorder) join (array - string)
var textForPrac = "Welcome to this Javascript";
console.log(textForPrac.split(""))
var textForPracArray = textForPrac.split("")
console.log(textForPracArray)
var reverseArray = textForPracArray.reverse()
console.log(reverseArray)
console.log(reverseArray.join(""))

//Given two strings, return true if they are anagrams of one another "Mary" is an anagram of "Army"
//sort (in ascending order alphabetically)
isAnagram("Mary", "Army")
function isAnagram(text1, text2) {
    var a = text1.toLowerCase().split("").sort().join("")
    var b = text2.toLowerCase().split("").sort().join("")
    return a === b
}

//Check if a given string is a palindrome ---racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account

isPalindrome('racecar')
isPalindrome('race car')

function isPalindrome(text) {
    var newText = text.toLowerCase().replace(/\s/g, "").split('').reverse().join('');
    console.log(newText)
    return text === newText
}

// Check if a given string is a isomorphic
isIsomorphic("egg", 'add'); // true
isIsomorphic("paper", 'title'); // true
isIsomorphic("kick", 'side'); // false

function checkIsomorphic(text1, text2) {




}


/// Given an array of integers, find the largest product yielded from three of the integers 

var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
console.log(unsortedArray.sort())
console.log(findProduct())

function sortArray(a, b) {
    return Math.abs(a) - Math.abs(b);
}
// 2 min and 1 max or 3 max 
function findProduct() {
    //sorting irrespective of signs
    var sortedArray = unsortedArray.sort(sortArray).reverse()
    console.log(sortedArray)
    var product = 1;
    for (var i = 0; i <= sortedArray.length; i++) {
        product = sortedArray[i] * product
        if (i > 2 && sortedArray[i] > 0) {

        }
        else {
            product = product * sortedArray[i]
        }




    }
}


