// Кодирование в функции isolateIt. функция принимает 1 параметр arr, это массив строк. Ваша задача поставить символ "|" в середину каждого элемента.

// Если длина строки является четным числом, используйте метод вставки. например: "abcd"должен стать "ab|cd". "|"следует вставить между abи cd.

// Если длина строки является нечетным числом, используйте метод замены. например: "abcde"должен стать "ab|de". Символ cбудет заменен на |.

// Исходный массив менять не надо, нужно вернуть новый массив (если вы используете метод map, то об этом можно не беспокоиться).

// Пример
// isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
// isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
// isolateIt(["1234","56789"]) should return ["12|34","56|89"]
// небольшая подсказка: гибкое использование slice()Will сделает работу более простой.

function isolateIt(arr) {
    return arr.map((element) => {
        let isolated = element.split("");
        if (!(element.length % 2)) {
            isolated.splice(isolated.length / 2, 0, "|");
            return isolated.join("");
        } else {
            isolated.splice(Math.floor(isolated.length / 2), 1, "|");
            return isolated.join("");
        }

    });
}

function isolateIt(arr) {
    var array = arr.map(function(item) {
        var itemLength = item.length;

        if (itemLength % 2 === 0) {
            return item.slice(0, itemLength / 2) + "|" + item.slice(itemLength / 2);
        } else {
            return item.slice(0, itemLength / 2) + "|" + item.slice(itemLength / 2 + 1);
        }

    });
    return array;
}