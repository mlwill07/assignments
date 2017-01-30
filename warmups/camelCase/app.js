//Write a function that takes a string input (which contains either spaces, underscores, or hyphens/dashes between words, but no combination of the two) and turn it into the camelCase version of that string.

function camelCase(string) {
    var output = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " " || string[i] === '_' || string[i] === '-') {
            output += string[i+1].toUpperCase();
            i++
        } else {
            output += string[i].toLowerCase();
        }
    }
    return output
}

console.log(camelCase('TeSt mM eE mM eE Ples'));