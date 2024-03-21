// Ways to declare a variable
//var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

 var age = 30;

console.log(age);

/*
Naming conventions
- Only letters, numbers, underscores and dollar signs
- Can't start with a number

Multi-word Formatting
- firstName = camelCase
- first_name = underscore
- FirstName =  PascalCase
- firstname = lowercase
*/

//Re-assigning Variables

age =31;

console.log(age);

let score;

score = 1;

console.log(score);

if(true){
    score = score + 1;
}

console.log(score);

const x = 100;

console.log(x);

// const cannot be reassigned

// const has to be initialized cannot be declared without initialization

const arr = [1, 2, 3, 4];

arr.push(5);

console.log(arr);

// Reassigning objects

const person = {
    name: 'Brad',
}

person.name = 'John';

person.email = 'brad@gmail.com';

console.log(person);

//Declaring multiple values

let a, b, c;
const d = 20, e = 30, f =40;

console.log(d);
console.log(a); //undefined






