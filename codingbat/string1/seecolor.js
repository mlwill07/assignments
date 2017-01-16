//Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

function seeColor(a) {
    if(a.indexOf("red") === 0) {
        return "red";
    } else if (a.indexOf('blue') === 0) {
        return "blue";
    } else {
        return "";
    }
}

console.log(seeColor("redxx")); // → "red"
console.log(seeColor("xxred")); // → ""
console.log(seeColor("blueTimes")); // → "blue"