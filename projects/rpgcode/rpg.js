var readline = require("readline-sync");

var isPlaying;
var prompted;


function initialize() {
    console.log("\nWelcome to the VERY NEARLY CERTAIN DEATH RPG game!\n\nAll those who enter here are VERY NEARLY certain to die a most terrible death!\n\nIt would be really stupid to play this game.\n\nYes, really.\n");

    var playerHealth = randomN(10, 15);
    var foolishOne = {
        name: "",
        favoriteColor: "",
        health: playerHealth,
        healingPotions: 1,
        level: 1,
        gold: 10,
        swallowVelocity: "",
        uselessInventory: ['Rusty Sword', 'Broken Shield', 'copper penny', 'strawberry jam']
    };

    var player = readline.question("\nWhat is your name?\n");
    var color = readline.question("\nWhat is your favorite color?\n")
    var vel = readline.question("\nWhat is the airspeed velocity of an unladen swallow?\n...european...\n");

    foolishOne.name = player;
    foolishOne.favoriteColor = color;
    foolishOne.swallowVelocity = vel;

    console.log("\nHi " + foolishOne.name.toUpperCase() + "!\n");
    return foolishOne;
}

function initialPrompt() {
    console.log("\nWould you like to play?\n\n yes [y] | no [n] ?");

    prompted = readline.prompt();

    if (prompted === 'y') {
        isPlaying = true;
    } else {
        console.log("Good decision! You saved your own life!");
        isPlaying = false;
    }
    console.log("\nI can't read your mind, what do you want to do?\n");
    prompted = getPrompt();
    return prompted;
}





function randomN(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function quit() {
    console.log("\nAre you sure you want to quit?\n");
    console.log("yes [y] | no [n] ?")
    prompted = readline.prompt();
    return prompted;
}

function getPrompt() {
    console.log("\nTo PLAY press [c] \nTo view your stats press [p] \nTo view your useless inventory press [i]\nTo QUIT press [q]\n");
    prompted = readline.prompt();
    return prompted;
}

function checkWalk() {
    var walkmessage = ["\nThe forest before you is dark, and it's nice and sunny here...\nDo you want to walk forward?\n", '\nShadows grow darker as you move into the shade of the forest.\nDo you really want to continue?\n', '\nYou hear a rustling behind you... \nYou better keep moving forward...\n', '\nThe deeper into the forest you go, the more likely you are to die!\nGo forward?\n', '\nAre you really sure you want to walk onward to what will surely be your death?\n', "\nWhen you die (and you will),\nyou'll regret all this walking.\n", "\nThere seems to be something ahead on the path, would you like to keep going?\n"];
    var count = 0;
    while (enemy != 2) {
        var messageItem = count % walkmessage.length;
        console.log(walkmessage[messageItem]);
        var walk = readline.keyIn("walk [w] ? ");
        var enemy = 0;
        if (walk === 'w') {
            enemy = randomN(0, 2);
            if (enemy === 2) {
                prompted = 'e';
                console.log("\nA shadow passes over your path...\n")
            }
        } else {
            console.log("\nI didn't get that, what did you want to do?\n");
            prompted = getPrompt();
            return prompted;
            break;
        }
        count++;
    }
    return prompted;
}

function checkFight() {
    console.log("\nAn enemy appears!\n\nIt will certainly kill you!\n\n");
    var fight = readline.keyIn("Do you want to fight or runaway?!\n\nfight [f] / runaway [r] ? ");
    if (fight === 'f') {
        prompted = 'b';
        return prompted;
    } else if (fight === 'r') {
        console.log("\nYou coward. Striving to save your own skin!\n");
        var runChance = randomN(1, 2);
        if (runChance === 2) {
            console.log("\nYou attempt to run like a whiney-whiner failed. Now you will die, for sure.\n")
            prompted = 'b';
            return prompted;
        } else {
            console.log("\nYou have successfully run away. I hope you are happy with your cowardly actions.\n");
            prompted = 'c';
            return prompted;
        }
    } else {
        console.log("\nThat won't work! Fight [f] or runaway [r]!!\n");
        prompted = 'e';
        return prompted;
    }
}


function getEnemies() {
    var enemyarray = ['Yeti', 'Baby Alligator', 'slug'];

    function Enemy(type, hitPoints, defense) {
        this.type = type;
        this.hitPoints = hitPoints;
        this.defense = defense;
    }


    function pickEnemy(array) {
        var num = Math.floor(Math.random() * 3);
        return array[num];
    }

    function randomN(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getHitPoints(type) {
        var hitPoints = 0;

        if (type === enemyarray[0]) {
            hitPoints = randomN(20, 25);
        } else if (type === enemyarray[1]) {
            hitPoints = randomN(9, 14);
        } else {
            hitPoints = randomN(4, 9);
        }
        return hitPoints + foolishOne.level;
    }


    var newEnemy = pickEnemy(enemyarray);
    var newHitPoints = getHitPoints(newEnemy);
    var defense = newHitPoints * 3;
    var baddie = new Enemy(newEnemy, newHitPoints, defense);
    return baddie;
}

function fightInterupter(isTurn) {

    if (isTurn === undefined) {
        var key = readline.keyIn("\nAre you ready?\n yes [y] ?");
    } else if (!isTurn) {
        console.log("\nPrepare to be attacked!");
        var key = readline.keyIn("\nAre you ready?\n yes [y]?");
    } else if (isTurn) {
        console.log("\nIt's your turn to attack!\n");
        var key = readline.keyIn("\nAre you ready?\n yes [y]?");
    }
}

function battle() {
    var enemy = getEnemies();
    console.log("\nYou have come across a " + enemy.type.toUpperCase() + "!\nPrepare to die!\n");
    var hitpoints = enemy.hitPoints;
    console.log("\nThe " + enemy.type.toUpperCase() + " has " + hitpoints + " hitpoints!\n");
    var suprise = randomN(1, 2);
    var isfirstStrike = true;
    while (foolishOne.health > 0 && hitpoints > 0) {
        if (suprise === 1 && isfirstStrike) {
            fightInterupter(isTurn);
            console.log("\nThe " + enemy.type + " has attacked!\n");
            takeHit();
            var isTurn = true;
            isfirstStrike = false;

        } else if (suprise === 2 && isfirstStrike) {
            fightInterupter(isTurn);
            console.log("\nYou suprised the " + enemy.type + " and will get the first hit!\n");
            hitpoints = attacker(hitpoints, enemy.type);
            isTurn = false;
            isfirstStrike = false;

        }
        if (isTurn && foolishOne.health > 0 && hitpoints > 0) {
            fightInterupter(isTurn);
            hitpoints = attacker(hitpoints, enemy.type);
            isTurn = false;

        } else if (!isTurn && foolishOne.health > 0 && hitpoints > 0) {
            fightInterupter(isTurn);
            takeHit();
            isTurn = true;

        }
    }
    if (foolishOne.health < 1) {
        console.log("\nBegin... violin music.\n")
        console.log("\nDon't look at me like that.\nIt's not my fault you died.\nI warned you of the very nearly certain death!\n");
        console.log("\nend credits.\n");
        console.log('....');
        console.log('....');
        console.log('....');
        console.log('....');
        console.log('\nmuch weeping\n');
        console.log('\n ////////////////////////////////////\n ////           GAME OVER        //// \n ////////////////////////////////////\n')
        isPlaying = false;
        return isPlaying;
    } else {
        prompted = 'g';
        return prompted;
    }
}

function attacker(hitpoints, enemy) {
    var hit = randomN(5, 10) + foolishOne.level;
    hitpoints = hitpoints - hit;
    if (hitpoints > 0) {
        console.log("\nYour strike was worth " + hit + ".\n\nThe " + enemy + " has " + hitpoints + " hitpoints left!");
    } else if (hitpoints <= 0) {
        console.log("\nYour strike was worth " + hit + " hitpoints!\n\n\tTHE " + enemy.toUpperCase() + " IS DEFEATED!\n")
        console.log("\nYou win!\n");
    }
    return hitpoints;
}

function takeHit() {
    var damage = randomN(4, 8) + foolishOne.level;
    foolishOne.health -= damage;
    if (foolishOne.health < 0) {
        foolishOne.health = 0;
    }
    console.log("\nYou lost " + damage + " health in the attack!\n\nYour health is now " + foolishOne.health + ".\n");
    if (foolishOne.healingPotions > 0 && foolishOne.health > 0) {
        console.log('\nYou have ' + foolishOne.healingPotions + " healing potions.\n");
        console.log('\nDo you want to use one?\n');
        var healing = readline.keyIn('yes [y] | no [n] ?\n');
        if (healing === 'y') {
            foolishOne.health += 10;
            foolishOne.healingPotions -= 1;
        }
        console.log("\nGood decision!\n\n You now have " + foolishOne.health + " health.\n")
    }
    return foolishOne.health;
}

function getStuff() {
    console.log("\nYou won a fight! That means you get swag!\n\n\t !!!!!WOOOOHOOOOO!!!!\n");
    var bonuspoints = randomN(5, 10) + foolishOne.level;
    foolishOne.health += bonuspoints;
    var items = ['useless dagger', 'broken compass', 'hole-y shoe', 'dirty napkin', 'glow stick of destiny', 'lint', 'tuna sandwich', 'moldy cheese', 'sock', 'peanut butter packet', 'slotted spoon'];
    var bonusitem = items[randomN(0, items.length-1)];
    foolishOne.uselessInventory.push(bonusitem);
    foolishOne.level++;
    var getpotion = randomN(0, 1);
    if (getpotion === 0) {
        console.log('\nSwag is awesome!\n');
        console.log('\nYou got:\n- a ' + bonusitem.toUpperCase() + ' and\n- ' + bonuspoints + ' health\n');
    } else if (getpotion  === 1) {
        foolishOne.healingPotions += 1;
        console.log('\nSwag is awesome!'); 
        console.log('\nYou got:\n- a ' + bonusitem.toUpperCase() + ' and\n- ' + bonuspoints + ' health and\n- 1 healing potion');
    }
    console.log('\nDo you want to see your stats? yes [y] | no [n] ?');
    var key = readline.prompt();
    if (key === 'y') {
        prompted = 'p';
    } else {
        prompted = getPrompt();
    }

    return prompted;
}

foolishOne = initialize();
prompted = initialPrompt();

while (isPlaying) {

    if (foolishOne.swallowVelocity === "11 mps" || foolishOne.swallowVelocity === "11 meters per second") {
        console.log("You have won the game by knowing the most amazing useless peice of knowledge!\nThe air speed velocity of an unladen european swallow is 11 meters per second!\n\n\n ////////////////////////////////////\n ////           GAME WON        //// \n ////////////////////////////////////\n");
        isPlaying = false;
    } else {
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
            break;
        case 'g':
            prompted = getStuff();
            break;
        default:
            getPrompt();
        }

        if (foolishOne.uselessInventory.lastIndexOf('glow stick of destiny') >= 0) {
            console.log("\n\nthe most amazing thing!\n\n THE GLOW STICK OF DESTINY\n\n");
            console.log("You have won the game by finding the most amazing useless invetory item!\n\n\n ////////////////////////////////////\n ////           GAME WON        //// \n ////////////////////////////////////\n");
            isPlaying = false;
        }
        if (foolishOne.uselessInventory.lastIndexOf('sock') >= 0) {
            console.log("\n\nMaster has given " + foolishOne.name + " a sock!\n\n");
            console.log("You have won the game by acheiveing your House Elf Liberation!!\n\n\n ////////////////////////////////////\n ////           GAME WON        //// \n ////////////////////////////////////\n");
            isPlaying = false;
        }
    }

    if (prompted === 'y') {
        isPlaying = false;
    }
}