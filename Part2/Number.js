function whatNumberIsIt(n) {
    //coding here
    if (Number(n) === Number.MAX_VALUE) {
        return "Input number is Number.MAX_VALUE";
    } else if (Number(n) === Number.MIN_VALUE) {
        return "Input number is Number.MIN_VALUE";
    } else if (Number(n) === Number.MIN_VALUE) {
        return "Input number is Number.MIN_VALUE";
    } else if (Number(n) === Number.POSITIVE_INFINITY) {
        return "Input number is Number.POSITIVE_INFINITY";
    } else if (Number(n) === Number.NEGATIVE_INFINITY) {
        return "Input number is Number.NEGATIVE_INFINITY";
    } else if (isNaN(n)) {
        return "Input number is Number.NaN";
    } else {
        return `Input number is ${n}`;
    }
}