var Car = function (my_name, my_make, my_color, my_year) {  
    this.name = my_name;
    this.make = my_make;
    this.color = my_color;
    this.year = my_year;
};

var car1 = new Car('Corolla', 'Toyota', 'green', 1999);  
var car2 = new Car('Model S', 'Tesla', 'black', 2014);

console.log(car1.make);  
console.log(car2.make);  
console.log(car1);
console.log(car2);