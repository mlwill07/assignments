var readline = require("readline-sync");

var isPlaying;
var prompted;


function initialize() {
    console.log("\nWelcome to the Certain Death RPG game!\nAll those who enter here are certain to die a most terrible death!\nIt would be really stupid to play this game.\nYes, really.\n");

    var playerHealth = randomN(5, 10);
    var foolishOne = {
        name: "",
        health: playerHealth,
        healingPotions: 1,
        gold: 10,
        uselessInventory: ['Rusty Sword', 'Broken Shield', 'copper penny', 'strawberry jam']
    };

    var player = readline.question("\nWhat is your name?\n");

    foolishOne.name = player;

    console.log("\nHi " + foolishOne.name.toUpperCase() + "! Welcome to your certain death!\n");
    return foolishOne;
}

function initialPrompt() {
    console.log("\nWould you like to play?\n\n y / n?");

    prompted = readline.prompt();

    if (prompted === 'y') {
        isPlaying = true;
    } else {
        console.log("Good decision! You saved your own life!");
        isPlaying = false;
    }
    console.log("I can't read your mind, what do you want?");
    prompted = getPrompt();
    return prompted;
}





function randomN(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function quit() {
    console.log("\nAre you sure you want to quit?\n");
    console.log("yes [y] || no [n]")
    prompted = readline.prompt();
    return prompted;
}

function getPrompt() {
    console.log("\n To view your stats press [p] | to vie your useless inventory press [i]\n to QUIT press [q] | to keep playing press [c]");
    prompted = readline.prompt();
    return prompted;
}

function checkWalk() {
    var walkmessage = ['The forest before you is dark, \ndo you want to walk forward?', 'Shadows grow longer as you move through the shade of the forest.\ndo you want to continue?', 'You hear a rustling behind you... \nYou better keep moving forward...', '\nThe deeper into the forest you go, the more likely you are to die! Go forward?', 'Are you really sure you want to walk onward to what will surely be your death?\n']
    while (enemy != 2) {
        console.log(walkmessage[randomN(0, 4)]);
        var walk = readline.keyIn("w ? ");
        var enemy = 0;
        if (walk === 'w') {
            enemy = randomN(0, 2);
            if (enemy === 2) {
                prompted = 'e';
                console.log("\nA shadow passes over your path...\n")
            }
        } else {
            console.log("I didn't get that, what did you want to do?");
            prompted = getPrompt();
            return prompted;
            break;
        }
    }
    return prompted;

}

function checkFight() {
    console.log("\nAn enemy appears!\nIt will certainly kill you!\n\n");
    var fight = readline.keyIn("Do you want to fight or runaway?!\nfight [f] / runaway [r] ? ");
    if (fight === 'f') {
        prompted = 'b';
        return prompted;
    } else if (fight === 'r') {
        console.log("\nYou coward. Striving to save your own skin!\n");
        var runChance = randomN(1, 2);
        if (runChance === 2) {
            console.log("You attempt to run like a whiney-whiner failed. Now you will die, for sure.")
            prompted = 'b';
            return prompted;
        } else {
            console.log("\nYou cowardly coward, you have successfully run away. I hope you are happy.\n");
            prompted = 'c';
            return prompted;
        }
    } else {
        console.log("\nThat won't work! Fight [f] or runaway [r]!!\n");
        prompted = 'e';
        return prompted;
    }
}

function battle() {
    var enemy = randomN(0, 2);
    var fiends = ["dragon", "sprite", "troll"];
    console.log("\nYou have come across a " + fiends[enemy].toUpperCase() + "!\nI have no doubt it will kill you!");
    var hitpoints = randomN(1, 10);
    console.log("The " + fiends[enemy].toUpperCase() + " has " + hitpoints + " hitpoints!");
    while (foolishOne.health > 0 && hitpoints > 0) {
        var suprise = randomN(1, 2);
        if (suprise === 1) {
            console.log("\nThe " + fiends[enemy] + " has attacked!\n");
            takeHit();
            hitpoints = attacker(hitpoints, fiends[enemy]);
        } else {
            console.log("You suprised the " + fiends[enemy] + " and will get the first hit!");
            hitpoints = attacker(hitpoints, fiends[enemy]);
        }
    }
    if (foolishOne.health < 1) {
        console.log("OHHH Maximum damage. poor little human....")
        console.log("Don't look at me like that.\nIt's not my fault you died. I warned you!");
        console.log("end credits.");
        console.log('....');
        console.log('....');
        console.log('....');
        console.log('....');
        console.log('much weeping');
        isPlaying = false;
        return isPlaying;
    } else {
        prompted = getPrompt();
        return prompted;
    }
}

function attacker(hitpoints, enemy) {
        var hit = randomN(1, 10);
        hitpoints = hitpoints - hit;
        if (hitpoints > 0) {
            console.log("Your strike was worth " + hit + ".\n The " + enemy + " has " + hitpoints + " hitpoints left!");
            takeHit();
        } else if (hitpoints <= 0) {
            console.log("Your strike was worth " + hit + "hitpoints!\nThe " + enemy + " is defeated!")
            console.log("You win!");
        }
        return hitpoints;
    }

    function takeHit() {
        var damage = randomN(1, 5);
        foolishOne.health -= damage;
        if(foolishOne.health < 0) {
            foolishOne.health = 0;
        }
        console.log("You lost " + damage + " health in the attack!\n Your health is now " + foolishOne.health + ".");
        if (foolishOne.healingPotions > 0 && foolishOne.health > 0) {
            console.log('You have ' + foolishOne.healingPotions + " healing potions.");
            console.log('Do you want to use one?');
            var healing = readline.keyIn('y / n ?');
            if (healing === 'y') {
                foolishOne.health += 10;
                foolishOne.healingPotions -= 1;
            }
        }
        return foolishOne.health;
    }

foolishOne = initialize();
prompted = initialPrompt();

while (isPlaying) {

    switch (prompted) {
    case 'q':
        quit();
        break;
    case 'i':
        console.log(foolishOne.uselessInventory);
        getPrompt();
        break;
    case 'p':
        console.log(foolishOne);
        getPrompt();
        break;
    case 'c':
        prompted = checkWalk();
        break;
    case 'e':
        prompted = checkFight();
        break;
    case 'b':
        prompted = battle();
        //        console.log("\nGet ready to fight!\n");
        break;
    default:
        getPrompt();
    }
    if (prompted === 'y') {
        isPlaying = false;
    }
}