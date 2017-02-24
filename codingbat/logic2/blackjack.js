//Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.

function blackjack(a, b) {
    var a1 = 21 - a;
    var b1 = 21 - b;
    if((a1 > b1 || a1 < 0) && b1 >= 0) {
        return b
    } else if ((b1 > a1 || b1 < 0 ) && a1 >= 0) {
        return a;
    } else if (a1 < 0 && b1 < 0) {
        return 0;
    }
}

console.log(blackjack(19, 21)); // → 21
console.log(blackjack(21, 19)); // → 21
console.log(blackjack(19, 22)); // → 19
console.log(blackjack(22, 22)); // → 0