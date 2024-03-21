//values are stored on the stack
const name = 'John';
const age = 38;

//Referance values are stored on the heap
const person = {
    Name: 'Girum Ketema',
    Email: 'girumketema4@gmail.com',
}

 let newName = name;
 newName = 'Johnatan';

 let newPerson = person;
 newPerson.Name = 'Besufikad Ketema';

 console.log(name, newName);
 console.log(person.Name, newPerson.Name);