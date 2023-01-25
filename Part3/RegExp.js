// Кодирование в функции countAnimals. функция принимает два параметра: animals, строка содержит несколько животных; count, массив списка животных, которых мы должны посчитать. В результате должен получиться массив чисел.

// Примеры
// countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
// countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
// countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
// countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]

function countAnimals(animals, count) {
    //coding here...
    let arr = count.map(el => (animals.match(new RegExp(el, "g")) || []).length);
    return arr;
}