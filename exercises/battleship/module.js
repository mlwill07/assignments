module.exports.sendBomb = function (a, b, grids) {
   
    if(grids.board[a][b].display === 'O') {
    if (grids.board[a][b].isShip === true) {
        grids.board[a][b].hit = true;
        grids.board[a][b].display = 'H';
        grids.hitCount++;
        console.log('\nHIT!!!\n')
    } else {
        grids.board[a][b].hit = false;
        grids.board[a][b].display = 'M';
        console.log('\nMISS\n')
    }
    } else {
        console.log('You already guessed that one!')
    }
    return grids;
}



module.exports.Location = function (isShip, hit, display) {
    this.isShip = isShip;
    this.hit = hit;
    this.display = display;
}

module.exports.printGrid = function (grids) {
    for (var i = 0; i < 10; i++) {
        var output = '';
        for (var j = 0; j < 10; j++) {
            var output = output + grids.board[i][j].display + " ";
        }
        console.log(output);
    }

}

module.exports.buildGrid = function(callback) {
    var grid = [];
    for (var i = 0; i < 10; i++) {
    var row = [];
    for (var j = 0; j < 10; j++) {
        var shipChance = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        if(shipChance === 1){
            var ship = true;
        } else {
            ship = false
        }
        var loca = new callback(ship, false, 'O')
        row.push(loca);
    }
    grid.push(row);
    
}
    return grid;
}