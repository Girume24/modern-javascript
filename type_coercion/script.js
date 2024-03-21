let x;

x = 5 + '5'; //number is coerced

x = 5 + Number('5');

x = 5 * '5'; //string is coerced

x = 5 + null; //null is coerced

x = Number(null);

x = Number(true);
x = Number(false);

x = 5 + true; //Boolean is coerced
x = 5 + false; //Boolean is coerced

x = 5 + undefined; //Number is coerced and the result will be NuN

console.log(x, typeof x);