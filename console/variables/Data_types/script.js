//String
const firstName = 'Sara';

//Number
const age = 30;
const temp = 98.9;

//Boolean

const hasKids = true;

//Null

const aptNumber = null;

//undefined

let score;
const match = undefined;

//Symbol

const id = Symbol('id');

//BigInt

const n = 567888688978986n;


//Reference Types
//All reference types are objects

//Array is object

const arr =[1, 2, 3, 4];

//object

const person = {
    Name: 'Girum',
    Email: 'girumketema4@gmail.com',
}

//function

function sayHello() {
    console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);