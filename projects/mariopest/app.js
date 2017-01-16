var goomba = 12;
var bobomb = 8;
var cheep = 5;

function getTotals(num1, num2, num3) {
    var goombaPrice = 5;
    var bobombPrice = 7;
    var cheepPrice = 11;
    
    var total = ((num1 * goombaPrice) + (num2 * bobombPrice) + (num3 * cheepPrice));
    var capture = (num1 + num2 + num3);
    
    var goombaSubTotal = (num1 * goombaPrice);
    var bobombSubTotal = (num2 * bobombPrice);
    var cheepSubTotal = (num3 * cheepPrice);
    
    document.getElementById('goombaTotal').textContent = num1;
    document.getElementById('goombaSubTotal').textContent = goombaSubTotal;
    document.getElementById('bobombTotal').textContent = num2;
    document.getElementById('bobombSubTotal').textContent = bobombSubTotal;
    document.getElementById('cheepTotal').textContent = num3;
    document.getElementById('cheepSubTotal').textContent = cheepSubTotal;
    document.getElementById('total').textContent = total;
    document.getElementById('captureTotal').textContent = capture;
}

document.getElementById('goombaPlus').addEventListener('click', function () {
    goomba++;
    getTotals(goomba, bobomb, cheep);
});


document.getElementById('goombaMinus').addEventListener('click', function () {
    goomba--;
    getTotals(goomba, bobomb, cheep);
});

document.getElementById('bobombPlus').addEventListener('click', function () {
    bobomb++;
    getTotals(goomba, bobomb, cheep);
});

document.getElementById('bobombMinus').addEventListener('click', function () {
    bobomb--;
    getTotals(goomba, bobomb, cheep);
});

document.getElementById('cheepPlus').addEventListener('click', function () {
    cheep++;
    getTotals(goomba, bobomb, cheep);
});

document.getElementById('cheepMinus').addEventListener('click', function () {
    cheep--;
    getTotals(goomba, bobomb, cheep);
});

document.getElementById('reset').addEventListener('click', function () {
    goomba = 0;
    bobomb = 0;
    cheep = 0;
    getTotals(goomba, bobomb, cheep);
});

document.getElementById('resetGoomba').addEventListener('click', function () {
    goomba = 0;
    getTotals(goomba, bobomb, cheep);
});

document.getElementById('resetBobomb').addEventListener('click', function () {
    bobomb = 0;
    getTotals(goomba, bobomb, cheep);
});

document.getElementById('resetCheep').addEventListener('click', function () {
    cheep = 0;
    getTotals(goomba, bobomb, cheep);
});