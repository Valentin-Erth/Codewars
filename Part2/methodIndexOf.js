// Кодирование в функции firstToLast, функция принимает 2 параметра: strи c. strявляется строкой. cявляется символом.

// Пожалуйста, верните пробел между первой cи последней позицией c.

// Если cв str, должно возвращаться положительное целое число; Если есть только один cв str, должен вернуть 0; Если нет cв str, должен вернуть -1. Поиск не должен игнорировать случай.

// Например:

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1

function firstToLast(str, c) {
    //coding here..
    if (str.indexOf(c) != -1) {
        return ((str.lastIndexOf(c) === str.indexOf(c)) ? 0 : str.lastIndexOf(c) - str.indexOf(c));
    } else {
        return -1;
    }
}

const firstToLast = (str, c) => str.search(c) != -1 ? str.lastIndexOf(c) - str.indexOf(c) : -1;