// В маленьком городке население p0 = 1000на начало года. Население регулярно увеличивается на 2 percent1 год, и, кроме того, 50каждый год в город приезжают новые жители. Сколько лет нужно городу, чтобы его население было больше или равно p = 1200количеству жителей?
//
//     At the end of the first year there will be:
//     1000 + 1000 * 0.02 + 50 => 1070 inhabitants
//
// At the end of the 2nd year there will be:
//     1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
//
// At the end of the 3rd year there will be:
//     1141 + 1141 * 0.02 + 50 => 1213
//
// It will need 3 entire years.
//     Более общие параметры:
//
//     p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
//
// функция nb_yearдолжна возвращать nколичество полных лет, необходимых для получения населения, большего или равного p.
//
//     aug — целое число, процент — положительное или нулевое плавающее число, p0 и p — положительные целые числа (> 0)
//
// Examples:
//     nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Примечание:
//     Не забудьте преобразовать параметр процента в процент в теле вашей функции: если параметр процента равен 2, вы должны преобразовать его в 0,02.

function nbYear(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        p0 += p0 * percent / 100
        p0 += aug;
        years++
    }
    return years
}