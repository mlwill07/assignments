//We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks

function makeBricks(small, big, goal) {
    
    var remain = goal % 5;
    var quot = Math.floor(goal/5);
    
    if(remain === 0 && (big * 5 >= goal)) {
            return true;
    } else if( (small >= remain) && ((small-remain) >= (quot - big)*5) ) {
        return true;
    } else {
        return false;
    }
}

console.log(1, makeBricks(3, 1, 8)); // → 1 true
console.log(2, makeBricks(3, 1, 9)); // → 2 false
console.log(3, makeBricks(3, 2, 10)); // → 3 true
console.log(4, makeBricks(15, 3, 27)); // → 4 true
console.log(5, makeBricks(2, 3, 13)); // → 5 false
console.log(6, makeBricks(2, 4, 17)); // → 6 true
console.log(7, makeBricks(6, 2, 17)); // → 7 false
console.log(8, makeBricks(12, 1, 17)); // → 8 true
console.log(9, makeBricks(12, 4, 17)); // → 9 true
console.log(10, makeBricks(1, 4, 17)); // → 10 false

//(small + big >= quot) && 