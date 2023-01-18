// Кодирование в функции maxMin. функция принимает 2 параметра arr1и arr2. Они представляют собой массив из двух чисел и имеют одинаковое количество элементов.

// Во-первых, вычислить разницу одного и того же индекса arr1и arr2. Как это:

// [1,3,5]
//  | | |   --->  8, 5, 2
// [9,8,7]
// Обратите внимание, что разница положительная. Например, выше 1 и 9, разница должна быть 8, а не -8. Я думаю, abs()может помочь вам получить правильный результат ;-)

// Затем найдите их максимальное и минимальное значения и верните результаты в виде массива. Как это:

//   maxvalue , minvalue
// [    8     ,    2     ]
function maxMin(arr1, arr2) {
    //coding here...
    let difference = arr1.map((el, i) => Math.abs(el - arr2[i]));
    return [Math.max(...difference), Math.min(...difference)];
}