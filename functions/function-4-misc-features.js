
// Misc Features of JS

// Default param values

// one way of handingline default
/*
function multiply(x, y) {

  if(y == "undefined") {
    y = 1;
  }

  return x * y;
}
*/

// 2nd way
/*
function multiply(x, y) {

  y === "undefined" ? 1 : y;

  return x * y;
}
*/

/*

function multiply(x, y=1) {
  return x * y;
}

console.log(multiply(4));

*/

// greeting function with default parameter 
/*
const greet = (name, greeting="Welcome") => {
  
  return `${greeting}, ${name} !!! `;
}

console.log(greet('praveen'));

console.log(greet('praveen', 'Howdy'));

*/

/*
const blah = (x, y=[1,2,3]) => {

  console.log('x:',x, 'y:', y);

}

blah();

*/

// SPREAD

// # 1 : SPREAD in function calls 

/*

console.log('Max fn pass values : ', Math.max(1,2,3,4,5,6));

const nums = [1,2,3,4,5,6];

console.log('Max fn pass array : ', Math.max(nums));

console.log('Max fn spread array : ', Math.max(...nums));

*/

/*

function giveMeFour(a, b, c, d) {
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
  console.log('d:', d);
}

//const colors = ['red', 'green', 'blue', 'cyan'];

const str1 = 'GOAT';

giveMeFour(...str1);

*/


// # 2 : SPREAD in Array Literals.

/*
const num1 = [12, 20, 32];
const num2 = [10, 11, 12];

const nums = ['a', 'b', ...num1, ...num2  ];

console.log(nums);

const num1Copy = [...num1];

console.log(num1Copy);

console.log(num1 === num1Copy);

// we can spread strings

const str1Array = [..."GOAT", ..."IE"];

console.log(str1Array);

*/

// # 3 : SPREAD in Objects.

const car1 = {
  name  : "Camry",
  brand : "Toyota",
  trim  : "LE"
}


const camryLE1 = {
  ...car1,
  mileage : 5200,
  price : 20450,
  color : 'Cystal Blue'
}

const camryLE2 = {
  ...camryLE1
}


const cars = ['camry', 'accord', 'civic', 'cx-5'];

const carsArr = [...cars, {..."pr"} ];

console.log(carsArr);


