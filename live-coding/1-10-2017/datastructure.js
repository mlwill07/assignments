// simple javascript datatypes //

var name = 'dan'; //string

var age = 10; //number

var isAdmin = true; //boolean

// Other simple data types in JS //

undefined;
null;
NaN;

// complex data types //

//arrays
var students = ['bob', 'dan', 'sarah']; //array

var ages = [3, 4, 5]

var admins = [true, true, false];

var muptiple = [true, 1, "hello", [1, 2, 3], {}, ] //can take multiple datatypes, but avoid doing this.

//objects

var person = {
    firstName: 'Dan',
    lastName: 'Pak',
    age: 23,
    isJapanese: false
};

//objects have properties, and those properties are 'key: value' pairs.

var phone = {
    color: 'black',
    brand: 'samsung',
    version: 's7',
    memCapacity: "128GB",
    isJailBroken: false,
    case: {
        color: 'Black',
        brand: 'Spigen'
    },
    owners: ["Bob Ziroll", "Dan Pak"], //this could be objects within an array, first, last etc.
    owners2: [
    {
        firstName: "bob",
        lastName: "Ziroll"
    },
    {
        firstnName: "Dan",
        lastName: "Pak",
    }
    ]
}

console.log(phone.brand); //returns 'Apple'
console.log(phone.case.brand); //returns 'Spigen'
console.log(phone.owners[0].firstName); //returns 'bob'