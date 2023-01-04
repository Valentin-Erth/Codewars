// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * (-1));
    }
    return newArr;
}


const invert = array => array.map(num => -num);