//Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

function startWord(a, b) {
    if (a.substr(1, b.length-1) === b.substr(1)) {
        return a.substr(0, b.length);
    } else {
        return "";
    }
}

console.log(startWord("hippo", "hi")); // → "hi"
console.log(startWord("hippo", "xip")); // → "hip"
console.log(startWord("hippo", "i")); // → "h"