// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
    let quarter = [1, 2, 3, 4];
    switch (month) {
        case 1:
        case 2:
        case 3:
            return quarter[0];
        case 4:
        case 5:
        case 6:
            return quarter[1];
        case 7:
        case 8:
        case 9:
            return quarter[2];
        case 10:
        case 11:
        case 12:
            return quarter[3];
    }
    // Your code here

}