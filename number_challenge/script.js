let x;

let y;

x = Math.floor(Math.random() * 100 + 1);

y = Math.floor(Math.random() * 50 + 1);

let sumOutput;
let differenceOutput;
let productOutput;
let quotientOutput;
let remainderOutput;

sumOutput = x + y;
differenceOutput = x - y;
productOutput = x * y;
quotientOutput = x / y;
remainderOutput = x % y;

console.log(`${x} + ${y} = ${sumOutput}`);
console.log(`${x} - ${y} = ${differenceOutput}`);
console.log(`${x} * ${y} = ${productOutput}`);
console.log(`${x} / ${y} = ${quotientOutput}`);
console.log(`${x} % ${y} = ${remainderOutput}`);
