//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
const repeatString=(str,n,r)=>{
    let res="";
    for (let i=0;i<n;i++){
        res+=`${str}${r}`
    }
    return res
}
console.log(repeatString("yo", 3, " "))
console.log(repeatString("yo", 3, ","))
// for или str.repeat()

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
function checkStart(str,s){return  str.toLowerCase().includes(s,0)}
console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))
// str.startWith() slice indexOF

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
const truncateString=(str,n)=>`${str.slice(0,n)}...`
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))
//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// split()
const getMinLengthWord=(str)=>{
    return(
        typeof (str) === "string" && str !== "" ? //string and NOT ""
            str.split(" ").reduce((a, b) => a.length <= b.length ? a : b)
            : null
    )
    //  let arr=str.split(" ")
    //  let arrCount=str.split(" ").map(el=>el.length)
    //  let min=Math.min(...arrCount)
    // return str.length==0?null: arr.filter(el=>el.length==min).join("")
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
console.log(getMinLengthWord(""))
//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
const setUpperCase=(str)=>str.split(" ").map(el=>el.toLowerCase()).map(el=>`${el[0].toUpperCase()}${el.slice(1)}`).join(" ")
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке
const isIncludes=(str,subStr)=>{
    let strArr=str.toLowerCase().split("")
    let subStrArr=subStr.toLowerCase().split("")
    return strArr.filter(el=>subStrArr.includes(el)).join("")===subStr.toLowerCase()
}
console.log(isIncludes("Incubator", "Cut")) //=> truec
console.log(isIncludes("Incubator", "table"))// => false
console.log(isIncludes("Incubator", "inbba"))  //=> true
console.log(isIncludes("Incubator", "inba")) // => true
// isIncludes("Incubator", "Incubatorrr")=> true
const num=Math.ceil(Math.random()*10)
console.log(num)