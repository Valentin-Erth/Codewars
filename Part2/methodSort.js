// одирование в функции sortIt. функция принимает 1 параметр arr, это массив чисел. Ваша задача отсортировать массив в соответствии с заданными условиями и вернуть новый массив (не следует изменять исходный массив).

// условия1: по количеству элементов (в порядке возрастания), например:

// sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
// because [1,1,1,2,2,3] has one 3, two 2 and three 1
// условия2: если одинаковое количество элементов, в соответствии с числовыми значениями (в порядке убывания), например:

// sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
// because number of 3,2 and 1 both are three, then according to 3>2>1
// Комплексные два условия должны быть такими:

// sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]


function sortIt(arr) {
    var copy = arr.slice();
    var counts = {};
    for (c of copy) {
        if (!counts[c]) {
            counts[c] = 1;
        } else {
            counts[c] += 1;
        }
    }

    copy.sort((a, b) => {
        if (counts[a] > counts[b]) {
            return 1;
        }
        if (counts[a] == counts[b]) {
            return b - a;
        }
        return -1;
    })
    return copy;
}