// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}

function rowSumOddNumbers(n) {
    let a1 = 1,
        an, Sum;
    for (i = 1; i < n; i++) {
        a1 += 2 * i;
    }
    an = a1 + 2 * (n - 1);
    Sum = ((a1 + an) / 2) * n;
    return Sum
}