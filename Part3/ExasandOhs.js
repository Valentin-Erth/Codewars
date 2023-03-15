// Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.
//
//     Примеры ввода/вывода:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //code here
    let O=str.split("").filter(el=>el.toUpperCase()=="O").length;
    let X=str.split("").filter(el=>el.toUpperCase()=="X").length;
    return X===O
}
