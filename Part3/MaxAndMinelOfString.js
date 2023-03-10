// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.

// Примеры
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Ноты
// Все номера действительны , подтверждать их Int32не нужно .
// Во входной строке всегда будет хотя бы одно число.
// Выходная строка должна состоять из двух чисел, разделенных одним пробелом, причем наибольшее число должно быть первым.
function highAndLow(numbers) {
    // ...
    let min = Math.min(...numbers.split(" ").map(el => Number(el)));
    let max = Math.max(...numbers.split(" ").map(el => Number(el)));
    return `${max} ${min}`
}