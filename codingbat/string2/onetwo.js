//Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of fewer than 3 chars at the end.

function oneTwo(str) {
    var output = '';
    for (var i = 0; i < str.length; i++){
        var sub = str.substr(i+1, 2);
        output += sub + str.charAt(i)
        i += 2
    }
    return output;
}

console.log(oneTwo("abc")) // → "bca"
console.log(oneTwo("tca")) // → "cat"
console.log(oneTwo("tcagdo")) // → "catdog"
console.log(oneTwo("tcagdotca")) // → "catdogcat"