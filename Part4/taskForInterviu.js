// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
// const sum =(a)=>(b)=>{
//         return a+b
//     }
//
// console.log(sum(3)(6))

// Реализовать функцию makeCounter которая работает следующим образом:
//first LE () () () => 3  (call counter 3 times)
//second LE () => 1 (call counter2 1 times)
// const makeCounter =()=>{
// let count=0
//     const counter=()=>{
//     count++
//         return count
//     }
//     return counter
// }
// const counter1=makeCounter()
// const counter2=makeCounter()
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())
// console.log(counter2())

//написать функцию кот принимает массив чисел и возвр новый массив с четными числами

// const makeEven =(arr)=>{
//     return arr.filter((el,i)=>el%2===0)
// }
// console.log(makeEven([1,2,4,5,7,22,8]))

//написать функцию кот принимает массив arr , возвращает объект, где ключем является значение a , а свойство - массив всех повторяющихся значений

// const arr = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 8, 8, 8]

const creatObject=(arr)=>{
    let newObj={}
    let newarr=[]
    for (let i=0;i<arr.length;i++){
        if (newObj[arr[i]]===undefined){
            newObj[arr[i]]=1
        }else  {
            newObj[arr[i]]+=1
        }
    }
    for(let key in newObj){
        newObj[key]=Array(newObj[key]).fill(key)
    }
    return newObj
}
console.log(creatObject([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 8, 8, 8]))
