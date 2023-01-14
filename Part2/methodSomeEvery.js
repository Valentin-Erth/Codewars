// Кодирование в функции mirrorImage. функция принимает 1 параметр arr, это массив чисел. Ваша задача — найти первую пару чисел зеркального отображения и вернуть их в виде массива. Два числа должны быть рядом, а возвращаемый массив находится в порядке слева направо.

// Какой номер зеркального отображения? например: 123и 321является парой зеркального отображения числа. Два одинаковых числа палиндромов также можно рассматривать как пару зеркально отраженных чисел, таких как 121и 121.

// Если такой номер не найден, верните[-1,-1]

// Пример
// mirrorImage([11,22,33,33,22,11]) should return [33,33]
// mirrorImage([454,86,57,75,16,88]) should return [57,75]
// mirrorImage([454,0,57,0,16,88]) should return [-1,-1]

function reverse(num, r = 0) {
    if (!num) return r;
    r = r * 10 + num % 10;
    return reverse(Math.floor(num / 10), r);
}

function mirrorImage(arr) {
    //coding here...
    let array = [];
    let a = 0,
        b = 0,
        c;
    let count = arr.some((x, i) => {
        a = arr[i];
        b = arr[i + 1];
        c = reverse(b);
        return a == c;
    })
    if (count) {
        return [a, b];
    } else {
        return [-1, -1];
    }
}

function mirrorImage(arr) {
    //coding here...

    let a, b;

    let check = arr.some((x, i) => {
        a = arr[i];
        b = arr[i + 1];
        return a === Number(String(b).split('').reverse().join(''));

    });

    return check ? [a, b] : [-1, -1];

}