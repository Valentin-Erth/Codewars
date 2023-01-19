// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumTwoSmallestNumbers(numbers) {
    //Code here
    let min1, min2;
    let arrSort = numbers.sort((a, b) => a - b);
    [min1, min2] = [arrSort[0], arrSort[1]]
    return min1 + min2;
}
var sumTwoSmallestNumbers = (numbers) => numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b)