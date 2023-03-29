// Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число и есть позиция, которую должно занимать слово в результате.
//
//     Примечание. Цифры могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).
//
// Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только допустимые последовательные числа.
//
//     Примеры
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


function order(words){
    if (words.length===0) {
        return ""
    }
    let digit=[1,2,3,4,5,6,7,8,9]
    return words.split(" ")
        .sort((a,b)=>a.split("").filter(ch=>digit.includes(Number(ch))).join("")-b.split("").filter(ch=>digit.includes(Number(ch))).join("")).join(" ")
}