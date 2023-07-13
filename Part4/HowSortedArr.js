// Complete the method which accepts an array of integers, and returns one of the following:
//
//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(arr) {
    let isAscending = true;
    let isDescending = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            isAscending = false;
        }
        if (arr[i] < arr[i + 1]) {
            isDescending = false;
        }
    }
    return isAscending ? "yes, ascending" : isDescending ? "yes, descending" : "no";
}

const isSortedAndHow = array => {
    let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0
    let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0

    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
}