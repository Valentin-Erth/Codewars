// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut(string) {
    let arr = [...string];
    let arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "a":
                break;
            case "e":
                break;
            case "i":
                break;
            case "o":
                break;
            case "u":
                break;
            default:
                arrResult.push(arr[i]);
        }
    }
    return arrResult.join('');
}

// best practice
function shortcut(string) {
    return string.replace(/[aouei]/g, '');
}