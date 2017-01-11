var socialPerson = {
    name: "Jody",
    age: 32,
    friends: ['Sarah', 'Maria', 'Andy'],
    isMarried: false,
    placesVisited: [
        {
            country: 'China',
            year: 2007
        },
        {
            country: 'Lebanon',
            year: 2006
        },
        {
            country: 'France',
            year: 2010
        },
        {
            country: 'Egypt',
            year: 2014
        }
    ],
    family: [
        {
            name: 'Mary',
            relation: 'Mother',
            age: 61,
            friends: ['Jo', 'Sam', 'Vanessa'],
            placesVisited: [
                {
                    country: 'China',
                    year: 2007
                },
                {
                    country: 'Lebanon',
                    year: 2006
                },
                {
                    country: 'France',
                    year: 2010
                }
            ]
        },
        {
            name: 'George',
            relation: 'Brother',
            age: 35,
            friends: ['Bob', 'Ken', 'Travis'],
            placesVisited: [
                {
                    country: 'Egypt',
                    year: 2015
                },
                {
                    country: 'Spain',
                    year: 2005
                },
                {
                    country: 'Brazil',
                    year: 2010
                }
            ]
        }
    ],
    visited: function () {
        for (var i = 0; i < this.placesVisited.length; i++) {
            console.log(this.placesVisited[i]);
        }
    }
}

socialPerson.visited();

socialPerson.family[0].isMarried = true;
socialPerson.family[1].isMarried = false;
socialPerson.friends.push('Trevor', 'Patrick');
console.log(socialPerson);

var new_person = {
    name: 'Jenny',
    relation: 'Sister',
    age: 30
}

socialPerson.family.push(new_person);
console.log(socialPerson.toString());
