function Enemy(type, hitPoints, defense) {
    this.type = type;
    this.hitPoints = hitPoints;
    this.defense = defense;
}


function pickEnemy() {
    var enemyTypes = ['Ancient Dragon', 'Prowler', 'Mighty Grunt'];
    var num = Math.floor(Math.random() * 3);
    return enemyTypes[num];
}

function randomN(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHitPoints(type) {
    var hitPoints = 0;

    if (type === 'Ancient Dragon') {
        hitPoints = randomN(80, 100);
    } else if (type === 'Prowler') {
        hitPoints = randomN(50, 79);
    } else {
        hitPoints = randomN(20, 49);
    }
    return hitPoints;
}

function getEnemies(num) {
    var manyenemies = [];
    for (var i = 0; i < num; i++) {
        var newEnemy = pickEnemy();
        var newHitPoints = getHitPoints(newEnemy);
        var defense = newHitPoints * 3;
        var baddie = new Enemy(newEnemy, newHitPoints, defense);
        manyenemies.push(baddie);
    }
    console.log(manyenemies);
}

getEnemies(100);