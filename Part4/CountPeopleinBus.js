// По городу движется автобус, который забирает и высаживает несколько человек на каждой остановке.
//
//     Вам предоставляется список (или массив) целочисленных пар. Элементы каждой пары представляют количество людей, садящихся в автобус (первый элемент), и количество людей, выходящих из автобуса (второй элемент) на автобусной остановке.
//
//     Ваша задача — вернуть количество людей, которые еще находятся в автобусе после последней автобусной остановки (после последнего массива). Несмотря на то, что это последняя автобусная остановка, автобус может быть не пустым, и некоторые люди все еще могут быть внутри автобуса, они, вероятно, спят там :D
//
// Взгляните на тест-кейсы.
//
//     Имейте в виду, что тестовые примеры гарантируют, что количество людей в автобусе всегда >= 0. Таким образом, возвращаемое целое число не может быть отрицательным.
//
//     Второе значение в первой паре массива равно 0, так как на первой остановке автобус пустой.
    const number =(busStops)=>{
    return busStops.map(pas=>pas[0]-pas[1]).reduce((t,a)=>t+a,0)
}