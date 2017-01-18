var readline = require("readline-sync");

console.log("Hi, let's get to know each other! \n");

var name = readline.question("What is your name? \n");

console.log('\nHi ' + name.toUpperCase() + ', nice to meet you!\n');

var color = readline.question("What is your favorite color?\n");

console.log('\nCool, if you stick your name and favorite color together \nyou get your smurf name: ' + name + color + "!\n");

var sentence = readline.question("Now tell me your favorite quote!\n");

console.log("\nThe length of that quote is " + sentence.length + "\n\nWow, that's pretty long!\nI rememer the last half:\n");


var sentence1 = sentence.substring(Math.floor(sentence.length/2, sentence.length));
console.log(sentence1);

var length = sentence.length-1;

var startAt = readline.question("\nDo you want to start from somewhere else in the quote?\nI can start from 0 to " + length + "? ");

console.log(sentence.substr(startAt));


