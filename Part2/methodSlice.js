// Кодирование в функции cutIt, функция принимает 1 параметр: arr. arrпредставляет собой массив строк.

// Первая миссия: Обходя arr, найдите кратчайшую длину строки.

// Вторая миссия: arrснова пройтись, перехватить все строки до кратчайшей длины строки (начать с index0). вы можете использовать один из slice() substring() или substr() сделать это. вернуть результат после завершения работы.

// Например:

// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

function cutIt(arr) {
    //coding here...
    let minimum = arr[0].length;
    for (let item of arr) {
        if (item.length < minimum) {
            minimum = item.length;
        }
    }
    let newArr = [];
    for (let item of arr) {
        newArr.push(item.slice(0, minimum));
    }
    return newArr;
}

function cutIt(arr) {
    let min = Math.min(...arr.map(x => x.length))
    return arr.map(x => x.slice(0, min))

}