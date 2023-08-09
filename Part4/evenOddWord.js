// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//     The input will be a lowercase string with no spaces.
//
//     Good luck!

// function capitalize(s) {
//     const evenWord = s.split('').map((el,i)=> i % 2 === 0 || i === 0 ? el.toUpperCase() : el).join('')
//     const oddWord=s.split('').map((el,i)=>i%2!==0? el.toUpperCase(): el).join('')
//     return [evenWord,oddWord]
// }
// console.log(capitalize('codewars'))