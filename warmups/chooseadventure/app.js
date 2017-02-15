var readline = require("readline-sync")

var isPlay = false;

function initialize() {
    console.log(`Welcome to a short choose your own adventure game!\n`)
    var name = readline.question(`What is your name?`);
    console.log(`\nWelcome ${name}`);
    var play = readline.question(`Would you like to begin?\n[y] || [n]\n`);
    if (play === 'y') {
        isPlay = true;
        adventure(isPlay);
    } else {
        return false;
    }
}


initialize();

function adventure(isPlay) {
    while (isPlay === true) {
     var choice = chooseStory();
        if (choice === '1'){
           return bootcamp(bootResult);
        } else if(choice === '2'){
            return siberia(siberiaResult);
        } else if (choice === '3'){
            return adopt(adoptResult);
        } else {
            return isPlay = false;
        }
    }
    return false;
}

function chooseStory(){
    console.log(`You need a change in life!\n`);
    var choose = readline.question(`What would you like to do:\n[1] Go to coding bootcamp!\n[2] Move to Siberia\n[3] Adopt a dog\n`);
    return choose;
}

function bootcamp(callback) {
    console.log('Coding bootcamp is hard but awesome!\n');
    var study = readline.question('Do you want to:\n[1] Study Hard\n[2] Play Ping Pong\n')
    isPlay = callback(study);
     return isPlay;
    
}

function bootResult(num) {
    if (num === '1') {
        console.log(`congrats! you got an awesome job, and get to play ping pong every day!\n`)
    } else {
        console.log("I guess you got an ok job, but they don't have ping pong there...\n");
        
    }
    isPlay = false;
    return isPlay;
}

function siberia(callback) {
    console.log('Siberia is really a lot colder than you expected!\n');
    var siberia = readline.question('Do you want to:\n[1] Tough it out?\n[2] Runaway?\n')
    isPlay = callback(siberia);
     return isPlay;
}

function siberiaResult(num) {
    if (num === '1') {
        console.log(`You freeze to death while dreaming of having gone to coding bootcamp...\n`)
    } else {
        console.log("Great choice!\n but now that you are back in real life,\nyou realize you should have gone to coding school!\n"); 
    }
    isPlay = false;
    return isPlay;
}

function adopt(callback) {
    console.log('Yes! Dogs are dogs! and need good homes!\n');
    var dog = readline.question('Do you want to:\n[1] Adopt a puppy?\n[2] Adopt an older dog?\n')
    isPlay = callback(dog);
     return isPlay;
}

function adoptResult(num) {
    if (num === '1') {
        console.log(`Awww..... what a cute puppy!\n`)
    } else {
        console.log("Aww.... what a cute dog!\n"); 
    }
    isPlay = false;
    return isPlay;
}
