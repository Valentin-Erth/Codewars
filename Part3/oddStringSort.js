// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
function sortMyString(S) {
    let arr = S.split("");
    return arr.filter((el, i, ar) => i % 2 == 0 || i == 0).join("") + " " + arr.filter((el, i, ar) => i % 2 == 1).join("");
}