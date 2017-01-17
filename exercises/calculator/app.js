function add(a, b) {
    document.getElementById('plus').textContent = a + b;
}

document.getElementById('plusbtn').addEventListener('click',  function(){ 
    var a = Number(document.getElementById('plus1').value);
    var b = Number(document.getElementById('plus2').value);
    add(a, b);
});

function minus(a, b) {
    document.getElementById('minus').textContent = a - b;
}

document.getElementById('minusbtn').addEventListener('click', function(){
    var a = Number(document.getElementById('minus1').value);
    var b = Number(document.getElementById('minus2').value);
    minus(a, b);
});

function mult(a, b) {
    document.getElementById('mult').textContent = a * b;
}

document.getElementById('multbtn').addEventListener('click', function(){
    var a = Number(document.getElementById('mult1').value);
    var b = Number(document.getElementById('mult2').value);
    mult(a, b);
});