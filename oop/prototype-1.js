// prototypes

/*
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1);

console.log(arr1.__proto__);

*/

/*
// Proto chain

const body = document.body;

console.log(body.__proto__);
console.log(body.__proto__.__proto__);
console.log(body.__proto__.__proto__.__proto__);
console.log(body.__proto__.__proto__.__proto__.__proto__);
console.log(body.__proto__.__proto__.__proto__.__proto__.__proto__);
*/

// Adding our own methods & properties to proto

String.prototype.yell = function () {
  return this.toUpperCase();
};

console.log("Where are you".yell());

//https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript

//https://medium.com/@eamonocallaghan/prototype-vs-proto-vs-prototype-in-javascript-6758cadcbae8
