// В этой Ката вам будет дана строка, которая может содержать смешанные прописные и строчные буквы, и ваша задача состоит в том, чтобы преобразовать эту строку либо только в строчные, либо только в прописные буквы на основе:
//
//     внести как можно меньше изменений.
//     если строка содержит одинаковое количество прописных и строчных букв, преобразовать строку в нижний регистр.
//     Например:
//
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
    let uppercaseCount = 0;
    let lowercaseCount = 0;

    // Count the number of uppercase and lowercase letters in the string
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            uppercaseCount++;
        } else {
            lowercaseCount++;
        }
    }

    // Convert the string to all uppercase or all lowercase based on which requires fewer changes
    if (uppercaseCount > lowercaseCount) {
        return s.toUpperCase();
    } else {
        return s.toLowerCase();
    }
}