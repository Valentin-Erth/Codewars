let count = 0;

function cc(card) {
    // Only change code below this line
    if (card > 1 && card < 7) {
        count++;
    } else if (card === 10 || typeof(card) === "string") {
        count--;
    }
    return count + (count > 0 ? " Bet" : " Hold");




    // Only change code above this line
}