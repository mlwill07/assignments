//Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.

function mixStart(string) {
    if (string.indexOf('ix') === 1) {
        return true;
    } else {
        return false;
    }
}

console.log(mixStart("mix snacks")); // → true
console.log(mixStart("pix snacks")); // → true
console.log(mixStart("piz snacks")); // → false