// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
//
//     You can assume all values in the array are numbers.
// const smallEnough=(a, limit)=>{
//     const checkArr=a.filter(el=>el<=limit)
//     if(checkArr.length===a.length){
//         return true
//     }else {
//         return false
//     }
// }
smallEnough = (a, l) => a.every(e => e <= l)