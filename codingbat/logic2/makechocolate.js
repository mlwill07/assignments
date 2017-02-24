//We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.

function makeChocolate(small, big, goal) {
    var remain = goal % 5;
    var quot = Math.floor(goal/5);
    
    if(quot >= big) {
        if((goal - (big * 5)) <= small){
            return goal - (big * 5)
        } else {
            return -1
        }
    } else {
        if((goal - (quot * 5)) <= small){
            return goal - (quot * 5)
        } else {
            return -1
        }
    }
}

console.log(makeChocolate(4, 1, 9)); // → 4
console.log(makeChocolate(4, 1, 10)); // → -1
console.log(makeChocolate(4, 1, 7)); // → 2
console.log(makeChocolate(4, 2, 7)); // → 2
console.log(makeChocolate(4, 2, 12)); // → 2
console.log(makeChocolate(1, 2, 12)); // → 2