var people = [  
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 10
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 30
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 200
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 30
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 200
    },
    {
        name: "John",
        email: "john@gmail.com",
        numFriends: 200
    },
    {
        name: "John",
        email: "john@gmail.com",
        numFriends: 200
    }
]

function combine(arr) {
    for (var i = 0; i < arr.length; i++){
        
        for(var j = 0; j < arr.length; j++){
            
            
            if((i != j) && arr[i].email === arr[j].email){
                arr[i].numFriends += arr[j].numFriends;
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

console.log(combine(people)); //