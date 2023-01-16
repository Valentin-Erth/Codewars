// Кодирование в функции tailAndHead. функция принимает 1 параметр arr(числовой массив).

// Мы используем пример, чтобы объяснить эту задачу:

// Вы получили массив [123,456,789,12,34,56,78].

// Сначала слева направо складываются хвост элемента и заголовок следующего элемента. Результаты помещаются в массив. как это:

// [123,456,789,1 2,3 4,5 6,78]
//    3+4 6+7 9+1 2+3 4+5 6+7  
//     |   |   |   |   |   |
//    [7 ,13 ,10 , 5 , 9 ,13]
// А затем вычислить их произведение и вернуть его ( 7x13x10x5x9x13=532350)

// Так,tailAndHead([123,456,789,12,34,56,78]) should return 532350 

// Все элементы arr являются положительными целыми числами. Если число меньше 10, то его голова и хвост одинаковы. Пожалуйста, попробуйте reduce()решить эту ката.

// Примеры
// tailAndHead([1,2,3,4,5]) should return 945
// tailAndHead([111,2345,66,78,900]) should return 7293
// tailAndHead([35456,782,569,2454,875]) should return 12012

function tailAndHead(arr) {
    //coding here...
    let arrNew = arr.reduce((total, amount, i, ar) => {
        let r;
        if (amount != ar[ar.length - 1]) {
            if (amount < 10) {
                r = arr[i] + arr[i + 1];
                total.push(r);

            } else {
                r = Number(String(ar[i])[String(ar[i]).length - 1]) + Number(String(ar[i + 1])[0]);
                total.push(r);
            }
        }
        return total;
    }, []);
    return arrNew.reduce((t, a) => t * a);
}

function tailAndHead(arr) {
    return arr.map(String)
        .reduce((x, y, i, r) => i == 0 ? [] : x.concat(Number(r[i - 1][r[i - 1].length - 1]) + Number(y[0])), [])
        .reduce((a, b) => a * b);
}