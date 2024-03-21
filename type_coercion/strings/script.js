let x;

const name = 'John';
const age = 30;

x = 'Hello my name is ' + name + ' and I am ' + age + ' years old';

// Template literals
x = `Hello my name is ${name} and I am ${age} years old`;

// String properties and methods
const s = new String('Hello World'); //this will return the type to object

x = typeof s;

x = s.length;

//Access value by key
x = s[0];

x = s.__proto__; //returns all the methods available

x = s.toUpperCase();

x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('d');

x = s.substring(2,5);

x = s.substring(7);

x = s.slice(-11, -6);

x = '        Hello World';

x = s.trim();

x = s.replace('World', 'John');

x = s.includes('Hell');

x = s.valueOf();

x = s.split(''); //split all the string elements in an array

console.log(x);