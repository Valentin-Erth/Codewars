// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
//
// Notes:
//     Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
//     Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
//     (13) is the minimum number could be formed from {1, 3, 1} , Without duplications
function minValue(values){
    let DuplicateObj={}
    for (let i=0;i<values.length; i++){
        let a=values[i]
        if(DuplicateObj[a]==undefined){
            DuplicateObj[a]=1
        } else {
            DuplicateObj[a]++
        }
    }
    return +Object.keys(DuplicateObj).join('')
}
// В данном случае, функция обратного вызова проверяет, что индекс элемента равен индексу первого вхождения элемента в массиве values. Это гарантирует, что только первое вхождение каждого элемента будет сохранено в новом массиве, а все последующие вхождения будут проигнорированы.Таким образом, после применения метода filter(), новый массив будет содержать только уникальные значения.
// function minValue(values){
//     const n = values
//         .filter((e, i, arr) => arr.indexOf(e) === i)
//         .sort()
//         .join('');
//     return Number(n);
// }