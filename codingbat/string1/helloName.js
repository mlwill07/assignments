//Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

function helloName(string) {
    string = "Hello " + string + "!";
    return string;
}

console.log(helloName("Bob")); // → "Hello Bob!"
console.log(helloName("Alice")); // → "Hello Alice!"
console.log(helloName("X")); // → "Hello X!"