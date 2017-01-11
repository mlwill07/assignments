var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruits);
console.log("vegetables: ", vegetables);

vegetables.pop();
console.log("vegetables: ", vegetables);

fruits.shift();
console.log("fruit: ", fruits);

fruits.push(fruits.indexOf('orange'));

console.log(fruits);

console.log(vegetables.length);

vegetables.push(vegetables.length);

console.log(vegetables);

var food = fruits.concat(vegetables);

console.log(food);

food.splice(4, 2);

console.log(food);

food.reverse();
console.log(food);

console.log(food.toString());