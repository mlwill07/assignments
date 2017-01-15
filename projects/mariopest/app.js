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
    
    document.getElementById('goombaTotal').innerText = num1;
    document.getElementById('goombaSubTotal').innerText = goombaSubTotal;
    document.getElementById('bobombTotal').innerText = num2;
    document.getElementById('bobombSubTotal').innerText = bobombSubTotal;
    document.getElementById('cheepTotal').innerText = num3;
    document.getElementById('cheepSubTotal').innerText = cheepSubTotal;
    document.getElementById('total').innerText = total;
    document.getElementById('captureTotal').innerText = capture;
}

document.getElementById('goombaPlus').addEventListener('click', function () {
    goomba++;
    getTotals(goomba, bobomb, cheep)
});


document.getElementById('goombaMinus').addEventListener('click', function () {
    goomba--;
    getTotals(goomba, bobomb, cheep)
});

document.getElementById('bobombPlus').addEventListener('click', function () {
    bobomb++;
    getTotals(goomba, bobomb, cheep)
});

document.getElementById('bobombMinus').addEventListener('click', function () {
    bobomb--;
    getTotals(goomba, bobomb, cheep)
});

document.getElementById('cheepPlus').addEventListener('click', function () {
    cheep++;
    getTotals(goomba, bobomb, cheep)
});

document.getElementById('cheepMinus').addEventListener('click', function () {
    cheep--;
    getTotals(goomba, bobomb, cheep)
});