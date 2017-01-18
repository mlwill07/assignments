function getDay() {
    var today = new Date();
    var day = today.getDay();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById('day').textContent = "Today is: " + days[day];
    var time = today.toLocaleTimeString();
    document.getElementById('time').textContent ="Current time is: " + time;
}

setInterval(getDay, 1000);