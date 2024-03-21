// challenge 1
let x;
let arr3;

const arr = [1, 2, 3, 4, 5];
const arr1 =[1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

x = arr.push(6);
x = arr.unshift(0);
x = arr.reverse();

// challenge 2

arr3 = arr1.concat(arr2);
arr3.splice(4,1);

console.log(x);
console.log(arr3);