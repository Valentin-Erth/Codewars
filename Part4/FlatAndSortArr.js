// двумерный [] преобразовать в плоский [массив]
const flattenAndSort = (array) => {
    // let newArray = [].concat(...array)
    let newArray=array.reduce((acc,val)=>acc.concat(val),[])
    return newArray.sort((a, b) => a - b)
}