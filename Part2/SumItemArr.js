// Проще говоря, наш метод не любит принцип переноса чисел и просто записывает каждое вычисляемое число :-)

// Вы можете предположить, что оба целых числа являются положительными целыми числами.

function add(num1, num2) {
    let result = [];
    let length;
    num1 = String(num1).split("").reverse();
    num2 = String(num2).split("").reverse();
    if (num1.length >= num2.length) {
        length = num1.length;
    } else {
        length = num2.length;
    }

    for (var i = 0; i < length; i++) {
        // Проверяем что элементы есть, либо заменяем их нулями.
        let a = num1[i] === undefined ? 0 : num1[i];
        let b = num2[i] === undefined ? 0 : num2[i];
        result.push(Number(a) + Number(b));
    }

    return Number(result.reverse().join(""));
}