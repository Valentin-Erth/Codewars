//
// Учитывая строку слов, вам нужно найти слово с наибольшим количеством очков.
//
//     Каждая буква слова набирает очки в зависимости от ее положения в алфавите a = 1, b = 2, c = 3и т. д.
//
//     Например, оценка равна abad( 81 + 2 + 1 + 4).
//
//     Вам нужно вернуть слово с наивысшим баллом в виде строки.
//
//     Если два слова имеют одинаковую оценку, верните слово, которое встречается первым в исходной строке.
//
//     Все буквы будут строчными, и все вводимые данные будут действительными.

const high = (x) => {
    const arrOfStr = x.split(' ')
    const arrOfCount = arrOfStr.map(el => el.split('').map(char => char.charCodeAt(0) - 96).reduce((a, b) => a + b, 0))
    const maxCount = Math.max(...arrOfCount)
    const index = arrOfCount.indexOf(maxCount)
    return arrOfStr[index]
}
console.log(high('man i need a taxi up to ubud'))