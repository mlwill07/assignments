var form = document.getElementById('travelform');
var diet = '';

function getdiet() {
    if (form.elements['diet-vegit'].checked === true) {
        var diet = "Vegetarian";
    }
    if (form.elements['diet-vegan'].checked === true) {
        diet += " Vegan";
    }
    if (form.elements['diet-halal'].checked === true) {
        diet += " Halal";
    }
    return diet;
}




function submit() {
    var diet = getdiet();
    alert('First Name: ' + form.elements['firstName'].value + "\nLast Name: " + form.elements['lastName'].value + "\nAge: " + form.elements['age'].value + "\nGender: " + form.elements['gender'].value + "\nLocation: " + form.elements['travel'].value + "\nDietart Restrictions: " + diet);
}

document.getElementById('submit').addEventListener('click', function () {
    submit();
})

console.dir(form);