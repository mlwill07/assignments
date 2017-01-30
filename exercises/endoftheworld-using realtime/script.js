

var timerTime = '';
var m = '';
var x = '';

function addZero(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
};


function timeformat(h) {
    hh = Math.floor(h / 3600000)
    mms = Math.floor(h / 10);
    ss = Math.floor(h / 1000);
    mm = Math.floor(h / 60000);
    mms = mms - 100 * ss;
    ss = ss - 60 * mm;
    mm = mm - 60 * hh;
    hh = addZero(hh);
    mm = addZero(mm);
    ss = addZero(ss);
    mms = addZero(mms);
    var displaytime = hh + ":" + mm + ":" + ss + ":" + mms;
    return displaytime;
}


function countDown(timer) {
    var stoptime = timer
    var goalTime = new Date();
    goalTime = goalTime.getTime();
    var countdown = stoptime - goalTime;
    var counttext = timeformat(countdown);
    document.getElementById('countDown').innerText = counttext;
    if (countdown <= 0) {
        x = setInterval(function () {alarm.play();}, 500);
        clearInterval(m);
        document.getElementById('clockText1').textContent = "it's all over :'\(";
        document.getElementById('countDown').innerText = "00:00:00:00";
        document.getElementById('thewholeshebang').className = 'ended';
     };
};

var alarm = document.getElementById('alarm');

function runDown() {
    var timer = new Date();
    timer = timer.getTime() + 20000;
    m = setInterval(function() {
        countDown(timer)}, 10);
}


document.getElementById('stopTimer').addEventListener('click', function() {
    alarm.pause();
    alarm.currentTime = 0;
    clearInterval(x);
    document.getElementById('thewholeshebang').className = 'boring';
});

runDown();