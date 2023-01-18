// Даны два целочисленных массива, где второй массив представляет собой перетасованный дубликат первого массива с отсутствующим одним элементом, найдите отсутствующий элемент.

// Обратите внимание, что в массивах могут быть дубликаты, поэтому проверка наличия числового значения в одном, а не в другом, не является допустимым решением.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// Первый массив всегда будет иметь хотя бы один элемент.
function findMissing(arr1, arr2) {
    // Your solution here
    let duplicates1 = arr1.filter((n, i, arr) => arr.indexOf(n) !== i);
    let duplicates2 = arr2.filter((n, i, arr) => arr.indexOf(n) !== i);

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
            return arr1[i];
        }
    }
    for (let i = 0; i < duplicates1.length; i++) {
        if (duplicates2.indexOf(duplicates1[i]) == -1) {
            return duplicates1[i];
        } else {
            return duplicates1[i];
        }
    }
}
//лучшее,сортировка, потом проверка по несовпадающим едементамБогонь
const findMissing = (arr1, arr2) => {
        arr1 = arr1.sort();
        arr2 = arr2.sort();
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) return arr1[i];
        }
    }
    //сперва сложить массивы, потом найти разницу между ними!!Класс
function findMissing(arr1, arr2) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
}