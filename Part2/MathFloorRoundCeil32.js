// Кодирование в функции roundIt. функция принимает 1 параметр n. Это число с десятичной точкой. Пожалуйста, используйте различные методы, основанные на расположении десятичной точки, превратите число в целое число.

// Если десятичная точка находится слева от числа (то есть количество цифр слева от десятичной точки меньше, чем справа), ceil()метод Using.

// roundIt(3.45) should return 4
// Если десятичная точка находится справа от числа (то есть количество цифр слева от десятичной точки больше, чем справа), floor()метод Using.

// roundIt(34.5) should return 34
// Если десятичная точка находится в середине числа (то есть количество цифр слева от десятичной точки равно количеству цифр справа), round()метод Using.

// roundIt(34.56) should return 35
// Ряд
function roundIt(n) {
    //coding here...
    return (String(n).slice(0, String(n).indexOf(".")).length > String(n).slice(String(n).indexOf("."), -1).length) ?
        Math.floor(n) :
        (String(n).slice(0, String(n).indexOf(".")).length < String(n).slice(String(n).indexOf("."), -1).length) ? Math.ceil(n) :
        Math.round(n);
}

function roundIt(n) {
    var [a, b] = String(n).split('.').map(s => s.length);
    if (a < b) return Math.ceil(n);
    if (a > b) return Math.floor(n);
    return Math.round(n);
}