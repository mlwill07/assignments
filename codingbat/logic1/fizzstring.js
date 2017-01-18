//Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged. (See also: FizzBuzz Code)

function fizzString(string) {
    var fizzString = '';
    if(string.indexOf('f') === 0) {
        fizzString += 'Fizz';
    }
    if (string.lastIndexOf('b') === string.length -1) {
        fizzString += "Buzz"
    }
    return fizzString;
}

console.log(fizzString("fig")); // → "Fizz"
console.log(fizzString("dib")); // → "Buzz"
console.log(fizzString("fib")); // → "FizzBuzz"