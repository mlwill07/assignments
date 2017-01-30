var readline = require("readline-sync");

var dictionary = {};
var isAdding = '';

function addWord(dictionary) {
    var option = readline.question('\nWould you like to look a word up, or add a new word?\nlookup [l] or add [a]?\n');
    if (option === 'l') {
        var check = readline.question('\nWhat word would you like to look up?\n');
        if (dictionary[check]) {
            console.log(`\n${check}: ${dictionary[check]}`);
        } else {
            console.log(`\n${check} is not in the dictionary\n`);
        }
    } else {
        var word = readline.question('What word would you like to add? ');
        word = word.toLowerCase();
        if (dictionary[word]) {
            console.log(`\n${word} is already in the dictionary!\n`);
            console.log(`\n${word}: ${dictionary[word]}\n`);
        } else {
            var definition = readline.question(`What is the definition of ${word}? `);
            definition = definition.toLowerCase();
            dictionary[word] = definition;
            console.log(`\n${word} has been added!`);
            console.log(`\n${word}: ${dictionary[word]}\n`)
        }
    }
    isAdding = readline.question('\nWould you like to add or lookup another word? [y] or [n]?\n');
}

do {
    addWord(dictionary);
} while (isAdding === 'y');