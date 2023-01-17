// Кодирование в функции blackAndWhite. функция принимает 1 параметр arr(числовой массив).

// Если arrэто не массив, функция должна вернуть:

// "It's a fake array"
// Если arrсодержит элементы 5 и 13, функция должна вернуть:

// "It's a black array"
// Если arrне содержит ни 5, ни 13, функция должна вернуть:

// "It's a white array"
// Примеры
// blackAndWhite(5,13) should return "It's a fake array"
// blackAndWhite([5,13]) should return "It's a black array"
// blackAndWhite([5,12]) should return "It's a white array" 
// Использование string templateи ternary operatorможет облегчить вашу работу.
function blackAndWhite(arr) {
    //coding here...
    let r;
    if (!Array.isArray(arr)) {
        r = "fake";
    } else if (arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0) {
        r = "black";
    } else {
        r = "white";
    }
    return `It's a ${r} array`
}

function blackAndWhite(arr) {
    //coding here...
    return `It's a ${Array.isArray(arr) ? arr.indexOf(5) != -1 && arr.indexOf(13) != -1 ? 'black' : 'white' : 'fake'} array`;
}