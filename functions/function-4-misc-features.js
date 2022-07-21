
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

// spread in function calls 

console.log('Max fn pass values : ', Math.max(1,2,3,4,5,6));

const nums = [1,2,3,4,5,6];

console.log('Max fn pass array : ', Math.max(nums));

console.log('Max fn spread array : ', Math.max(...nums));



