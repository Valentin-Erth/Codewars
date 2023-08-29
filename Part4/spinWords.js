// Напишите функцию, которая принимает строку, состоящую из одного или нескольких слов, и возвращает ту же строку, но со всеми пятью или более буквами слов в обратном порядке (точно так же, как название этой ката). Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае, если присутствует более одного слова.
//
//     Примеры:
//
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

const spinWords=(s)=>{
    return s.split(' ').map(w=>w.length===5 || w.length>5 ? w.split('').reverse().join('') : w).join(' ')
}
console.log(spinWords("Hey fellow warriors"))