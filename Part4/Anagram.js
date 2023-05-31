// Анаграмма — это результат перестановки букв слова для получения нового слова (см. Википедию ) .
//
//     Примечание: анаграммы нечувствительны к регистру.
//
//     Завершите возвращаемую функцию, trueесли два заданных аргумента являются анаграммами друг друга; вернуть falseиначе.
//
//     Примеры
// "foefet"является анаграммой"toffee"
//
// "Buckethead"является анаграммой"DeathCubeK"


const isAnagram = (test, original) => {
    let testLowerCase = test.toLowerCase().split("").sort()
    let originalLowerCase = original.toLowerCase().split("").sort()

    for (let i=0;i<testLowerCase.length;i++) {
        if ( test.length !== original.length||originalLowerCase[i]!==testLowerCase[i]) {
            return false
        }
    }
    return true
};