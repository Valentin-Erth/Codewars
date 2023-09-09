// Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти его!
//
//     findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// Гарантируется, что массив содержит не менее 3 чисел.
//
//     Тесты содержат очень огромные массивы, поэтому подумайте о производительности.
//
//     Это первое ката в серии:
//
//     Найдите уникальный номер (это ката)
const findUniq = (arr) => {
    // do magic
    const uniqueArr = [...new Set(arr)]
    const elCount = {}
    arr.forEach(el => {
        if (elCount[el] !== undefined) {
            elCount[el] += 1
        } else {
            elCount[el] = 1

        }
    })
    for (let el in elCount) {
        if (elCount[el] === 1) {
            return +el
        }
    }
}
// function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
// }

    //Эта функция предполагает, что в массиве есть только одно уникальное значение, которое встречается однократно, и возвращает его
// function findUniq(arr) {
//     return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }
// function findUniq(arr) {
//     return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
// }