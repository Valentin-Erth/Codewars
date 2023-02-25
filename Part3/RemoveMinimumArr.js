// Музей невероятно скучных вещей
// Музей невероятно скучных вещей хочет избавиться от некоторых выставок. Мириам, архитектор интерьеров, придумывает план убрать самые скучные выставки. Она дает им рейтинг, а затем удаляет тот, у которого самый низкий рейтинг.
//
//     Однако, как только она закончила оценивать все выставки, она отправилась на важную ярмарку, поэтому она попросила вас написать программу, которая сообщает ей оценки предметов после того, как один из них удалил самый низкий. Справедливо.
//
//     Задача
// Учитывая массив целых чисел, удалите наименьшее значение. Не изменяйте исходный массив/список. Если есть несколько элементов с одинаковым значением, удалите элемент с более низким индексом. Если вы получили пустой массив/список, верните пустой массив/список.
//
//     Не меняйте порядок оставшихся элементов.
//
//     Примеры
// * Input: [1,2,3,4,5], output = [2,3,4,5]
//     * Input: [5,3,2,1,4], output = [5,3,2,4]
//     * Input: [2,2,1,2,1], output = [2,2,2,1]

const removeSmallest=(numbers)=> {
    let newArr=[...numbers]
    let min=Math.min(...numbers)
    let index=numbers.indexOf(min);
    if (index!==-1){
        newArr.splice(index,1);
        return newArr;
    }else{
        return [];
    }
}
const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));