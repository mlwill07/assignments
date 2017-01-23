function Building(name, color, hasGarage, hasKitchen) {
    this.name = name;
    this.color = color;
    this.hasGarage = hasGarage;
    this.hasKitchen = (hasKitchen === undefined) ? true : hasKitchen;
}

var myBuilding = new Building('Fun House', 'red', false);

//myBuilding = {
//    name: “Fun House”,
//    color: “red”,
//    hasGarage: false,
//    hasKitchen: true
//}

console.log(myBuilding);