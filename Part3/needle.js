// Сможете ли вы найти иголку в стоге сена?

// Напишите функцию findNeedle(), которая принимает arrayполный мусор, но содержит один"needle"

// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:

// "found the needle at position "плюс indexон нашел иглу, так что:

// Пример (ввод --> вывод)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Примечание. В COBOL он должен возвращать "found the needle at position 6"
function findNeedle(haystack) {
    // your code here
    if (haystack.indexOf("needle") != -1) {
        return `found the needle at position ${haystack.indexOf("needle")}`;
    }
}