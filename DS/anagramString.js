const { forOwn } = require("lodash");

//Given two strings, return true if they are anagrams of one another "Mary" is an anagram of "Army"
console.log(isAnagram("Mary", "Army"));
function isAnagram(text1, text2) {
    var a = text1.toLowerCase().split("").sort().join("")
    var b = text2.toLowerCase().split("").sort().join("")
    return a === b
}




