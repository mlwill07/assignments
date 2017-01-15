//Return true if the given string contains between 1 and 3 'e' chars.

function stringE(string) {
    string = string.toLowerCase();
    var counter = 0;
    for (var i =0; i < string.length; i++) {
        if (string[i] === 'e') {
            counter++;
        }
    }
    if ((counter >= 1) && (counter <= 3)) {
        return true;
    } else {
        return false;
    }
}

console.log(stringE("Hello")); // → true
console.log(stringE("Heelle")); // → true
console.log(stringE("Heelele")); // → false
console.log(stringE("Bob")); // → false
console.log(stringE("Eve")); // → true