// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    let arrN = arr.filter(el => el >= 0);
    return arrN.reduce((a, el) => a + el, 0);
}

function positiveSum(arr) {
    return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0);
}