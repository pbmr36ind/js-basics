// Function Scope

/*

let bird = 'mandarin duck';

function birdWatch() {

    let bird = 'golden pheasant';
    console.log(bird);
}

console.log(bird);

*/

// Block Scope

// problem of using var in block scope
/*
if (true) {
  var animal = "eel";
}

console.log(animal);
*/

/*

//var is not block scoped unlike let / const

var i = 10;

console.log(i);

for (var i = 1; i < 5; i++) {
  console.log(true);
}

console.log(i);

*/

/*
function doubleArray(arr) {
  const results = [];

  for (let n of arr) {
    let double_ = n * 2;
    results.push(double_);
  }

  return results;
}

console.log(doubleArray([2, 4, 6]));
*/

// Lexical Scope

/*
function outer() {
  let movie = "The Gladiator";

  function inner() {
    console.log(movie.toUpperCase());
  }

  inner();
}

inner();
*/

/*

// variables inside inner() cant be accesssed by its parent

function outer() {
  let movie = "The Gladiator";

  function inner() {
    let story = "The Red River";
    console.log(movie.toUpperCase());
  }

  inner();

  console.log(story.toUpperCase());
}

outer();

*/

/*
function outer() {
  let movie = "The Gladiator";

  function inner() {
    //let movie = "The Red River";

    function extraInner() {
      console.log(movie.toUpperCase());
    }

    extraInner();
  }

  inner();
}

outer();

*/

/*

// Function Expressions

const sum = function addToNumber(x, y) {
  return x + y;
};

console.log(sum(100, 20));

console.log(addToNumber(15, 30));

*/

// Functions are JS Objects.
//   Referenced by variables and passed on as parameters.

/*

const sum = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const division = function (a, b) {
  return a / b;
};

/*
const operations = [sum, subtract, multiply, division];

for (fn of operations) {
  let results = fn(15, 5);
  console.log(results);
}*/

// function as object variable

/*
const ops = {
  func1: sum,
  func2: subtract,
  func3: multiply,
  func4: division,
};

console.log(ops.func1(120, 45));

*/

// Higher Order Functions

// Pass function as parameter
/*
function callNTimes(func, n) {
  for (let i = 0; i < n; i++) {
    func(i);
  }
}

function laugh(counter) {
  console.log(counter, "Ha Ha Ha");
}

// pass function as parameter
callNTimes(laugh, 10);
*/

// return function from a function
/*
const multiplyBy = function (num) {
  // returns a function - acts like a factory
  return function (x) {
    return x * num;
  };
};

const triple = multiplyBy(3);
console.log(triple(5)); // 15

const double = multiplyBy(2);
console.log(double(8)); // 16

*/
/*
const betweenNumFunction = function (x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
};

const isAdult = betweenNumFunction(18, 100);

console.log(isAdult(24));

console.log(isAdult(12));
*/

/*

// return function

const isInArray = function (arr) {
  return function (elem) {
    return arr.includes(elem);
  };
};

const isFruit = isInArray(["apple", "banana", "orange"]);

console.log(isFruit("orange"));
console.log(isFruit("brocolli"));

const isMeat = isInArray(["chicken", "mutton", "shrimp"]);

console.log(isMeat("shrimp"));
console.log(isMeat("orange"));

*/

// Callbacks
/*
setTimeout(() => {
  console.log("Hello World");
}, 5000);

*/

/*
function func1() {
  console.log("You clicked me");
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Why did you click me ?");
});

*/

// Hoisting

/*
//works
console.log(name);

var name = "praveen";
*/

/*
// will not work. 
console.log(name);

let name = "praveen";
*/

// hoisted functions
/*
howl();

function howl() {
  console.log("Awoooooh awoooh");
}
*/

/* function expression as variable
console.log(howl);

howl();

var howl = function () {
  console.log("Awoooooh awoooh");
};

*/

//function expression as variable using let

console.log(howl);

howl();

let howl = function () {
  console.log("Awoooooh awoooh");
};
