//Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.

function front22(string) {
    var front = string.slice(0, 2);
    string = front + string + front;
    return string;
}

console.log(front22("kitten")); // → "kikittenki"
console.log(front22("Ha")); // → "HaHaHa"
console.log(front22("abc")); // → "ababcab"
console.log(front22("a")); // → "aaa"