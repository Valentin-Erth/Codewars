// Задача
// Учитывая массив целых чисел , Найдите минимальную сумму , которая получается в результате суммирования каждого произведения двух целых чисел .

// Ноты
// Массив/список будет содержать только положительные значения .
// Массив/список всегда будет иметь четный размер
// Ввод >> Примеры вывода
// minSum({5,4,2,3}) ==> return (22) 
// Объяснение :
// Минимальная сумма , полученная при суммировании каждого произведения двух целых чисел ,  5*2 + 3*4 = 22
function minSum(arr) {
    // your code here
    let arrNew = arr.sort((a, b) => a - b);
    let arrP = [];
    for (let i = 0, n = 1; i < arrNew.length / 2; i++) {
        arrP.push(arrNew[i] * arrNew[arrNew.length - n]);
        n++;
    }
    return arrP.reduce((a, i) => a + i);
}

function minSum(arr) {
    return arr.sort((a, b) => a - b)
        .slice(0, arr.length / 2)
        .reduce((acc, curr, index) => acc += curr * arr[arr.length - index - 1], 0)
}