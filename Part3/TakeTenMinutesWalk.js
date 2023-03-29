// Вы живете в городе Картезия, где все дороги выложены идеальной сеткой. Вы пришли на встречу на десять минут раньше назначенного срока, поэтому решили воспользоваться возможностью прогуляться. Город предоставляет своим горожанам приложение Walk Generating на их телефонах — каждый раз, когда вы нажимаете кнопку, оно отправляет вам массив строк из одной буквы, представляющих направления ходьбы (например, ['n', 's', 'w', «е»]). Вы всегда проходите только один квартал для каждой буквы (направления), и вы знаете, что вам потребуется одна минута, чтобы пройти один городской квартал, поэтому создайте функцию, которая будет возвращать true, если прогулка, которую предлагает вам приложение, займет у вас ровно десять минут (вы не хочу ни рано, ни поздно!) и, конечно же, вернет вас в исходную точку. В противном случае верните false .
//
//     Примечание . Вы всегда будете получать допустимый массив, содержащий случайный набор букв направления (только «n», «s», «e» или «w»). Он никогда не даст вам пустой массив (это не прогулка, это стояние на месте!).
function isValidWalk(walk) {
    //insert brilliant code here
    if (walk.length !== 10) {
        return false;
    }

    let northSouth = 0;
    let eastWest = 0;

    for (let direction of walk) {
        switch (direction) {
            case 'n':
                northSouth++;
                break;
            case 's':
                northSouth--;
                break;
            case 'e':
                eastWest++;
                break;
            case 'w':
                eastWest--;
                break;
        }
    }

    return northSouth === 0 && eastWest === 0;

}
function isValidWalk(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;

    return walk.length === 10 && north === south && east === west;