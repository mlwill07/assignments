var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

for(var i = 0; i < names.length; i++) {
    console.log('Attemping to call ' + names[i]);
    setTimeout(attemptCall, 1000, names[i], dontCall, call, sendText);
}

function attemptCall (name, dontcall, call, sendtext) {
        var item = name.toLowerCase();
        if(item.indexOf('a') != item.lastIndexOf('a')) {
            sendtext(name);
           
        } else if (item.length % 2 === 0) {
            call(name);
            
        } else if (item.length % 2 != 0) {
            dontcall(name);
        }
}

function dontCall(name) {
    console.log("You did not call " + name);
}

function call(name) {
    console.log("You called " + name)
}

function sendText(name) {
    console.log("You texted " + name)
}

//attemptCall(names, dontcall, call, sendText);

//setTimeout(attemptCall, 5000, names, call, dontcall, sendText);