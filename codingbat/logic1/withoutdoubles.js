//Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true, if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6.

function withoutDoubles(a, b, boo) {
    if(boo) {
        if (a === b) {
            if (a === 6) {
                a = 1;
                return a + b;
            } else {
                return (a + 1) + b;
            }
           
        } else {
        return (a + b)
        }
    } else {
        return a + b;
    }
}

console.log(withoutDoubles(2, 3, true)); // → 5
console.log(withoutDoubles(3, 3, true)); // → 7
console.log(withoutDoubles(3, 3, false)); // → 6
console.log(withoutDoubles(6, 6, true)); // → 7