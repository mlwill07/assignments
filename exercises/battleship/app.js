var readline = require('readline-sync');
var battle = require('./module');


function battleShip(){
    var grid = battle.buildGrid(battle.Location);
    var grids = {
        board: grid,
        hitCount: 0
    }
    battle.printGrid(grids);
    
    while (grids.hitCount < 4) {
    var a = parseInt(readline.question("First coordinate? (0-10)\n"));
    var b = parseInt(readline.question("Second coordinate? (0-10)\n"));
    grids = battle.sendBomb(a, b, grids);
    battle.printGrid(grids);
    
    }
   console.log('Three Hits! You finally won!') 
}

battleShip();