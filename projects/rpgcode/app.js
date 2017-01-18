var readline = require("readline-sync");

console.log("\nWelcome to the Certain Death RPG game!\nAll those who enter here are certain to die a most terrible death!\nIt would be really stupid to play this game.\nYes, really.\n");

var isPlay;

function randomN(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkPlay(value) {
    if (value === false) {
        isPlay = false;
    } else {
        var start = readline.keyIn("\nDo you want to play or quit? p / q ?\n");
        if (start === 'p') {
            isPlay = true;
        } else {
            isPlay = false;
        }
    }
    return isPlay;
}




checkPlay();

while (isPlay) {
    var enemy;
    var walk;
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

    console.log("Would you like to know your stats before you die?");

    var stats = readline.keyIn("\ny / n ?");
    if (stats === 'y') {
        console.log(foolishOne);
    }

    function prompt() {
        console.log("To walk enter 'w' in the keyboard, to print your stats enter 'print', to quit enter 'q'.\n 'w' OR 'print' OR 'q'");
        var prompt = readline.prompt();
        if (prompt === 'w') {
            checkWalk();
        } else if (prompt === 'print') {
            console.log(foolishOne);
            return checkPlay();
        } else {
            return checkPlay();
        }
    }

    function strike() {
        var ready = readline.keyIn("r / n ?");
        if (ready === 'n') {
            checkPlay();
        } else {
            
        }
        return hit;
    }

    function takeHit() {
        var damage = randomN(1, 5);
        foolishOne.health -= damage;
        if (foolishOne.health < 1) {
            console.log("OHHH Maximum damage. poor little human....")
            console.log("Don't look at me like that.\nIt's not my fault you died. I warned you!");
            console.log("end credits.");
            console.log('....');
            console.log('....');
            console.log('....');
            console.log('....');
            console.log('much weeping');
            return foolishOne.health;
        } else {
            console.log("You lost " + damage + " health in the attack!\n Your health is now " + foolishOne.health + ".");
            if (foolishOne.healingPotions > 0) {
                console.log('You have ' + foolishOne.healingPotions + " healing potions.");
                console.log('Do you want to use one?');
                var healing = readline.keyIn('y / n ?');
                if (healing === 'y') {
                    foolishOne.health += 10;
                    foolishOne.healingPotions -= 1;
                }
            }
        }
    }

    function attacker(hitpoints) {
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


    function battle() {
        var enemy = randomN(0, 2);
        var fiends = ["dragon", "sprite", "troll"];
        console.log("\nYou have come across a " + fiends[enemy].toUpperCase() + "!\nI have no doubt it will kill you!");
        var hitpoints = randomN(1, 10);
        console.log("The " + fiends[enemy].toUpperCase() + " has " + hitpoints + " hitpoints!");
        while (foolishOne.health > 0 && hitpoints > 0) {
            var firstStrike = true;
            if (firstStrike = true) {
                var suprise = randomN(1, 2);
                if (suprise === 1) {
                    console.log("\nThe " + fiends[enemy] + " has attacked!\n");
                    takeHit();
                } else {
                    console.log("You suprised the " + fiends[enemy] + " and will get the first hit!");
                    //            attacker(fiends[enemy]);
                    prompted = getPrompt();
                    return prompted;
                    break;
                }
                firstStrike = false;
            }
            prompted = getPrompt;
            return prompted;
            break;
        }
    }
        



    //
    //    function checkFight() {
    //        console.log("\nAn enemy appears!\nIt will certainly kill you!\n\n");
    //        var fight = readline.keyIn("Do you want to fight or runaway?!\nfight [f] / runaway [r] ? ");
    //        if (run === 'f') {
    ////          battle(randomN(0, 2));
    //            console.log('shift to battle mode')
    //        } else if (run === 'r') {
    //            console.log("\nYou coward. Striving to save your own skin!\n");
    //            var runChance = randomN(1, 2);
    //            if (runChance === 2) {
    //                console.log("You attempt to run like a whiney-whiner failed. Now you will die, for sure.")
    ////              battle(randomN(0, 2));
    //                console.log('shift to battle mode')
    //            } else {
    //                console.log("\nYou cowardly coward, you have successfully run away. I hope you are happy.\n");
    //                prompted = c;
    //                return prompted;
    //            }       
    //        } else {
    //            console.log("I didn't get that, what did you want to do?");
    //            prompted = getPrompt();
    //            return prompted;
    //        }
    //    }