let x;

const arr = [23, 76, 88, 10, 12];

//arr.push(13);
//arr.pop();
//arr.unshift(99);
//arr.shift();
//arr.reverse();

x = arr.includes(76);

x = arr.indexOf(12);

//x = arr.slice(1,4);

//x = arr.splice(3,4);

//x = arr.splice(2, 1);

x = arr.splice(1, 4).reverse().toString().charAt(1);

console.log(x);