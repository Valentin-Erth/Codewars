// Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает отсортированный массив, содержащий те же строки, упорядоченные от самой короткой до самой длинной.
//
//     Например, если этот массив был передан в качестве аргумента:
//
//     ["Telescopes", "Glasses", "Eyes", "Monocles"]
//
// Ваша функция вернет следующий массив:
//
//     ["Eyes", "Glasses", "Monocles", "Telescopes"]
//
// Все строки в массиве, переданном вашей функции, будут иметь разную длину, поэтому вам не придется решать, как упорядочить несколько строк одинаковой длины.

function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    let  arraySaort=array.sort((a,b)=>a.length-b.length)
    return arraySaort
};