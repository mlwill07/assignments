var box = document.getElementById('box1');

box.addEventListener('mouseover', function() {
    box.style.backgroundColor = 'blue';
});

box.addEventListener('mouseout', function() {
    box.style.backgroundColor = 'grey';
});

box.addEventListener('mousedown', function () {
    box.style.backgroundColor = 'red';
});

box.addEventListener('mouseup', function() {
    box.style.backgroundColor = 'yellow';
});

box.addEventListener('dblclick', function () {
    box.style.backgroundColor = 'green';
});

window.addEventListener('scroll', function() {
    box.style.backgroundColor = 'orange';
});

document.addEventListener('keydown', function(event) {
//    var x = event.keyCode;
    if (event.keyCode === 66) {
        box.style.backgroundColor = 'blue';
    } else if (event.keyCode === 82) {
        box.style.backgroundColor = 'red';
    } else if (event.keyCode === 71) {
        box.style.backgroundColor = 'green';
    } else if (event.keyCode === 79) {
        box.style.backgroundColor = 'orange';
    } else if (event.keyCode === 89) {
        box.style.backgroundColor = 'yellow';
    }
});

document.addEventListener('keydown', function(event) {
//    var x = event.keyCode;
    if (event.keyCode === 82) {
        box.style.backgroundColor = 'red';
    }
});