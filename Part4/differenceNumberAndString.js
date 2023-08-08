// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
//
//     Return as a number.
const divCon=(x)=>{
    const numberOfX=x.filter(el=>typeof el=== 'number' ).reduce((acc,el)=>acc+el,0)
    const stringOfX=x.filter(el=>typeof el=== 'string').map(el=>+el).reduce((acc,el)=>acc+el,0)
    return numberOfX-stringOfX
}
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))