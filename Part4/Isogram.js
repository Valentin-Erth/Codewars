// Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорировать регистр букв.
//
//     Пример: (Ввод --> Вывод)
//
// "Дерматоглифика" --> истина "аба" --> ложь "moOse" --> ложь (игнорировать регистр букв)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

const isIsogram=(str)=>{
    charCount={}
    let charList=str.toLowerCase()
    for(let char of charList){
        charCount[char]= charCount[char]?charCount[char]+1:1
    }
    for(let char in charCount){
        if(charCount[char]>1){
            return false
        }
    }
    return true
}