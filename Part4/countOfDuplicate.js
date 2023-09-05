// Напишите функцию, которая будет возвращать количество различных буквенных символов и числовых цифр, не зависящих от регистра, которые встречаются во входной строке более одного раза. Можно предположить, что входная строка содержит только буквы алфавита (как прописные, так и строчные) и числовые цифры.
//
//     Пример
// «abcde» -> 0 # no characters repeats more than once
// «aabbcde» -> 2 # 'a' and 'b'
// «aabBcde» -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// «неделимость» -> 1 # 'i' occurs six times
// «Неделимости» -> 2 # 'i' occurs seven times and 's' occurs twice
// «aA11» -> 2 # 'a' and '1'
// «ABBA» -> 2 # 'A' and 'B' each occur twice
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
const duplicateCount=(text)=>{
    const charCount={}
    let repeatArrCount=[]
    text.toLowerCase().split('').forEach(char=>{
        if(charCount[char]!==undefined) {
            charCount[char]+=1
        } else {charCount[char]=1}
    })
    for (let char in charCount) {
        if (charCount[char] > 1) {
            repeatArrCount.push({char: charCount[char]})
        }
    }

    return repeatArrCount.length
}

console.log(duplicateCount("aaaaabBcde"))

// function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
//         return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }