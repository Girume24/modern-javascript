let x;

const person = {
    name: 'Girum Ketema',
    age: 24,
    isAdmin: true,
    address: {
        city: 'AA',
        subcity: 'Lemi kura',
        Area: 'Summit Safari',
    },
    Hobbies: ['music','outdoors','TV-series']
}

x = person.name;
x = person.address.Area;
x = person.Hobbies;

person.isAdmin = false;
person.Hobbies[1] = 'indoors';

delete person.isAdmin;

console.log(person);