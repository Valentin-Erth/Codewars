// Реализуйте функцию, которая принимает 2 аргумента: stringи separator.

// Ожидаемый алгоритм: разбить stringна слова по пробелам, разбить каждое слово на отдельные символы и соединить их обратно с заданным separator, соединить все получившиеся «слова» обратно в предложение с пробелами.

// Например:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

function splitAndMerge(string, separator) {
    let arr = string.split(" ");
    let resArr = [];
    for (let word of arr) {
        resArr.push(word.split("").join(separator));
    }
    return resArr.join(" ");
}


splitAndMerge = (str, sp) => str.split(' ').map(a => a.split('').join(sp)).join(' ')