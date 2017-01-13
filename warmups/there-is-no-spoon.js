var bananas = {
    color: 'yellow',
    origin: 'mexico',
    number: 40,
    eatBanana: function () {
        this.number--;
        return this.number;
    }
}

console.log(bananas.eatBanana());

var monitor = {
    size: 22,
    color: 'black',
    brand: 'ASUS',
    isOn: false,
    ports: ['HDMI', 'RGB', 'usb'],
    turnOff: function () {
        if (this.isOn == false) {
            this.isOn = true;
        }
        return this.isOn;
    }
}

console.log(monitor.turnOff());

var coffeePot = {
    coffee: {
        Brand: "Seatle's Best",
        Flavor: 'Hazelnut',
        roastDate: 2017,
        isWholeBean: false,
    },
    potBrand: "Mr. Coffee",
    isFresh: true,
    cups: 12,
    coffeeBrew: function () {
        if (this.cups == 12) {
            console.log('Coffee is ready!');
        }
    }
}

coffeePot.coffeeBrew();

var coffeeCup = {
    color: 'black',
    isfull: true,
    isdirty: true,
    brand: 'Hydro Flask',
    manufactureYear: 2016,
    wash: function() {
        if (this.isdirty == true) {
            console.log('You need to wash your cup!')
        }
    }
}

coffeeCup.wash();

var phone = {
    brand: 'samsung',
    model: 'galaxy s7 edge',
    memory: 60,
    getmoreMem: function() {
        console.log('Add external memory!');
    }
}

phone.getmoreMem();

var yogurt = {
    brand: "siggi's",
    flavor: 'blueberry',
    quantity: 150,
    isOpen: false,
    eatYogurt: function() {
        if (this.isOpen == false) {
            console.log('Open your yogurt!')
        } else {console.log('eat your yogurt!')}
    }
}

yogurt.eatYogurt();

var powerStrip = {
    color: 'grey',
    brand: 'belkin',
    numberOutlet: 12,
    isPluggedIn: true,
    ports: ['usb', 'cable', 'jack'],
    freeOutlets: 9,
    needMorePower: function(){
        console.log('More POWER!');
    }
}

powerStrip.needMorePower();

var computer = {
    brand: 'Apple',
    model: 'MacBook Pro',
    year: '2015',
    getapc: function() {
        if (this.brand == 'Apple') {
            console.log('Get a PC!')
        } else {console.log('Wooohooo! PC!')}
    }
}

computer.getapc();

var chair = {
    framColor: 'white',
    fabricColor: 'blue',
    isRaised: true,
    lower: function() {
        if(this.isRaised == true){
            this.isRaised = false
        }
        return this.isRaised;
    }
}

console.log(chair.lower());

var table = {
    height: 36,
    surface: 'wood',
    structure: 'pipe',
    numberLegs: 4,
    destabalize: function() {
        this.numberLegs--;
        return this.numberLegs;
    }
}

console.log(table.destabalize());