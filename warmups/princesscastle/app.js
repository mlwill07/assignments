function Player(name) {
    this.name = name;
    this.totalCoins = 10;
    this.status = 'small';
    this.star = false;
    this.setName = function (namePicked) {
        this.name = namePicked;
    };
    this.gotHit = function () {
        switch (this.status) {
        case 'dead':
            this.gameActive = false;
            break;
        case 'small':
            this.status = 'dead';
            this.gameActive = false;
            break;
        case 'big':
            this.status = 'small';
            break;
        case 'powered up':
            this.status = 'big';
            break;

        }
    };
    this.gotPowerup = function () {
        switch (this.status) {
        case 'dead':
            this.gameActive = false;
            break;
        case 'small':
            this.status = 'big';
            break;
        case 'big':
            this.status = 'powered up';
            break;
        case 'powered up':
            this.status = 'powered up';
            break;

        }
    };
    this.gameActive = true;
    this.addCoin = function () {
        this.totalCoins++
    };
    this.print = function () {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\nStar: ${this.star}`)
    }
}

var mario = new Player("Joe");

mario.setName("Mario");

console.log(mario);

function randomN(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play(name) {
    var name = new Player(name);
    var num = randomN(0,2)
    name.setName('Mario');
    name.print();
    if(num === 0){
        name.gotHit();
        console.log(`\n${name.name} got hit!\n`);
    } else if( num === 1) {
        name.gotPowerup();
        console.log(`\n${name.name} got a powerup!\n`)
    } else {
        name.addCoin();
        console.log(`\n${name.name} got a coin!\n`)
    }
    name.print();
}

play('Joe');
play('Ken');
play('tim');