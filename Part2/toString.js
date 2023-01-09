// Кодирование в функции colorOf. функция принимает 3 параметра: r g b. Это означает значение цвета красного, зеленого и синего. диапазон значений 0-255.

// Используйте toString(16)Преобразование чисел rgb в шестнадцатеричную форму строки. наконец, объедините их в цветовой веб-код и верните его.

// код цвета должен начинаться с «#». а затем используйте 2 символа на цвет.

// Например:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"
function colorOf(r, g, b) {
    //coding here
    let a = (r.toString(16).length == 2) ? r.toString(16) : "0" + r.toString(16);
    let k = (g.toString(16).length == 2) ? g.toString(16) : "0" + g.toString(16);
    let c = (b.toString(16).length == 2) ? b.toString(16) : "0" + b.toString(16);

    return "#" + a + k + c;
}
// best practice
function colorOf(r, g, b) {
    r.toString(16).length < 2 ? r = '0' + r.toString(16) : r = r.toString(16);
    g.toString(16).length < 2 ? g = '0' + g.toString(16) : g = g.toString(16);
    b.toString(16).length < 2 ? b = '0' + b.toString(16) : b = b.toString(16);

    return '#' + r + g + b;
}