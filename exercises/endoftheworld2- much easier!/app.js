var timer = document.getElementById('timer');
var countDown = 2;
var intervalId;

function updateTime() {
    timer.textContent = countDown;
    countDown--;
    if(countDown < 0) {
        clearInterval(intervalId);
    }
}

var intervalId = setInterval(updateTime, 1000);

//using only the interval to count down.