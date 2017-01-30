var items = JSON.parse(localStorage.getItem('list'));
if (items) {
//    store = store.split(',');
    for (var i = 0; i < items.length; i++) {
        $('ol').prepend(`<li> ${items[i]} <button class='btn btn-sm btn-danger remove' id='${items[i]}'><span class='glyphicon glyphicon-remove'></span></button></li>`);
    }
} else {
    items = [];
}


$('#addBtn').click(function () {
    callback();
});

$('#itemAdd').keypress(function () {
    if (event.which === 13) {
        event.preventDefault();
        callback();
    }
});

//var items = [];

var callback = function () {
    var item = $('input:text').val();
    if (item.length < 1) {
        return false;
    } else {
        $('ol').prepend(`<li> ${item} <button class='btn btn-sm btn-danger remove' id='${item}'><span class='glyphicon glyphicon-remove'></span></button></li>`);
    }
    $('input:text').focus();
    $('#itemAdd').val("");
    items.push(item);
    localStorage.setItem('list', JSON.stringify(items));
}

$('#listItems').on('click', ".remove", function () {
    var removeItem = this.parentElement.textContent.trim();
    this.parentElement.remove();
    for (var j = 0; j < items.length; j++) {
        if (items[j] === removeItem) {
            items.splice(j, 1);
        }
    }
    localStorage.setItem('list', JSON.stringify(items));
    if (items.length <= 0) {
        localStorage.removeItem('list');
    }
});