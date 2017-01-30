function Party(name, population) {
    this.name = name;
    this.population = population
}

var penguins = new Party('penguins', 1000000);
var commis = new Party('communists', 1000000);
var turn = randomN(1, 2)

console.log(`\nLet's get started! The Penguins and the Communisits each\nstart with a population of 1,000,000\n`);


var x = setInterval(function(){
    if (turn === 1) {
        var target = penguins;
        turn = 2;
    } else {
        target = commis;
        turn = 1;
    }
    sendNuke(target, onHit, onMiss);
    
}, 3500);


function sendNuke(party, call, back) {
    var success = randomN(1, 2);
    if (success === 1) {
        call(party);
    } else {
        back(party);
    }

}

function onHit(party) {
    var damage = randomN(200000, 400000);
    party.population -= damage;
    if (party.population > 0) {
        console.log(`\nThe ${party.name.toUpperCase()} are under attack!!`)
        console.log(`\nThe ${party.name.toUpperCase()} were hit for damage of -${damage.toLocaleString()}.\nTheir population is now ${party.population.toLocaleString()}\n\n`);
    } else if (party.population <= 0) {
        clearInterval(x);
        console.log(`\nThe ${party.name.toUpperCase()} lost, and their entire population has been killed!\n\n`);
    }
}

function onMiss(party) {
    console.log(`\nThe ${party.name.toUpperCase()} are under attack!!`)
    console.log(`\nThere was no damage to the ${party.name.toUpperCase()}.\nThe nuke hit the ice shelf, thus contributing to global sea level rise.\n\n`);
}

function randomN(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}