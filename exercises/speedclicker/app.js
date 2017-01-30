var textArea = document.getElementById('clicks');
var clicks = 0;

clicks = Number(localStorage.clickCount);

if (!clicks) {
    clicks = 0;
} else {
    textArea.textContent = clicks;
}

var timer = document.getElementById('timer');
var countDown = 3;
var intervalId;

function updateTime() {
    timer.textContent = countDown;
    countDown--;
    if (countDown < 0) {
        clearInterval(intervalId);
    }
}

var intervalId = setInterval(updateTime, 1000);

function clicker() {
    window.addEventListener('click', function () {
        clicks++;
        textArea.textContent = clicks;
        localStorage.setItem('clickCount', clicks)
    });
}

if (countDown <= 0) {
    window.addEventListener('click', function () {
        textArea.textContent += "no clicking allowed";
    });
} else {
    clicker();
}