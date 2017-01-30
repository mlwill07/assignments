
var submit = document.getElementById('submitButton');

submit.addEventListener('click', function() {
    var form = document.getElementById('scoreForm');
    
    var name = form.elements['name'].value;
    var game = form.elements['game'].value;
    var highScore = parseInt(form.elements['score'].value);
    
    var scoreDate = form.elements['scoreDate'].value;
    var scoreType = form.elements['scoreType'].value;
    if (name === "" || game === "" || highScore === "" || scoreDate === "") {
        alert('form fields are required!')
        return false;
    }
    
    if(form.elements['check'].checked) {
        var messages = ["Yo losers! Beat this!","Ain't no one can beat this score!", "I am the champion!", "My grandma plays better than you!", "You are never going to beat this score!"]
        var messagenumber = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
        var message = messages[messagenumber];
    } else {
        message = '';
    }
    if(highScore <= 0) {
        alert("Zero is for losers!");
        return false;
    } 

    
    document.getElementById('tableBody').innerHTML += `
    <tr>
        <td>${name}</td>
        <td>${game}</td>
        <td>${highScore}</td>
        <td>${scoreType}</td>
        <td>${scoreDate}</td>
        <td>${message}</td>
    </tr>`;
});

