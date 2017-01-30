var goomba = 12;
var bobomb = 8;
var cheep = 5;
var coinPlus = new Audio('Mario-coin-sound.mp3');
var coinMinus = new Audio('smb_pipe.wav');
var isDay = true;

function getTotals(num1, num2, num3) {
    var goombaPrice = 5;
    var bobombPrice = 7;
    var cheepPrice = 11;
    
    var total = ((num1 * goombaPrice) + (num2 * bobombPrice) + (num3 * cheepPrice));
    var capture = (num1 + num2 + num3);
    
    var goombaSubTotal = (num1 * goombaPrice);
    var bobombSubTotal = (num2 * bobombPrice);
    var cheepSubTotal = (num3 * cheepPrice);
    
    $('#goombaTotal').text(num1);
    $('#goombaSubTotal').text(goombaSubTotal);
    $('#bobombTotal').text(num2);
    $('#bobombSubTotal').text(bobombSubTotal);
    $('#cheepTotal').text(num3);
    $('#cheepSubTotal').text(cheepSubTotal);
    $('#total').text(total);
    $('#captureTotal').text(capture);
}

$('#goombaPlus').click(function () {
    goomba++;
    coinPlus.play();
    getTotals(goomba, bobomb, cheep);
});


$('#goombaMinus').click(function () {
    goomba--;
    coinMinus.play();
    getTotals(goomba, bobomb, cheep);
});

$('#bobombPlus').click(function () {
    bobomb++;
    coinPlus.play();
    getTotals(goomba, bobomb, cheep);
});

$('#bobombMinus').click(function () {
    bobomb--;
    coinMinus.play();
    getTotals(goomba, bobomb, cheep);
});

$('#cheepPlus').click(function () {
    cheep++;
    coinPlus.play();
    getTotals(goomba, bobomb, cheep);
});

$('#cheepMinus').click(function () {
    cheep--;
    coinMinus.play();
    getTotals(goomba, bobomb, cheep);
});

$('#reset').click(function () {
    goomba = 0;
    bobomb = 0;
    cheep = 0;
    getTotals(goomba, bobomb, cheep);
});

$('#resetGoomba').click(function () {
    goomba = 0;
    getTotals(goomba, bobomb, cheep);
});

$('#resetBobomb').click(function () {
    bobomb = 0;
    getTotals(goomba, bobomb, cheep);
});

$('#resetCheep').click(function () {
    cheep = 0;
    getTotals(goomba, bobomb, cheep);
});

$('#nightVision').click(function(){
 if (isDay){
    $('header').css('backgroundColor', 'black');
    $('header>h1').css('color', 'skyblue');
    $('header>h2').css('color', 'skyblue');
    $('main').css('backgroundColor', 'rgba(0,0,0, .8)');
    $('.myContainer').css('backgroundColor', 'rgba(0,0,0, .3)');
    $('div>h2').css('color', 'skyblue');
    $('.sectionTitle').css('backgroundColor', 'darkgreen');
    $('footer').css('backgroundColor', 'rgba(0,0,0, 1)');
    isDay = false;
 } else {
     $('header').css('backgroundColor', '');
    $('header>h1').css('color', '');
    $('header>h2').css('color', '');
    $('main').css('backgroundColor', '');
    $('.myContainer').css('backgroundColor', '');
    $('div>h2').css('color', '');
    $('.sectionTitle').css('backgroundColor', '');
    $('footer').css('backgroundColor', '');
     isDay = true;
 }
});