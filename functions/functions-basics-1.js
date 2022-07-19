/*
function square(number) {
  return number * number;
}

console.log(square(4));

*/

/*
function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;

  return roll;
}

function throwDice(numberOfRolls) {
  for (let i = 0; i < numberOfRolls; i++) {
    console.log(`Roll Dice : ${rollDice()}`);
  }
}

throwDice(25);
*/

/*
function greet(name) {
  console.log(`Welcome to winterfell !!! ${name}`);
}

greet("Arya");

greet();
*/

/*

function greet(fname, lname) {
  console.log(`Welcome to winterfell !!! ${lname}, ${fname}`);
}

greet("praveen", "mohan");

*/

/*

function sum(x, y) {
  return x + y;
}

console.log(`Sum(14, 6) : ${sum(14, 6)}`);


function square(x) {
  return x * x;
}

console.log(`Square(10) : ${square(10)}`);

*/

/*
function isValidPassword(password, userName) {
  if (
    password.length < 8 ||
    password.indexOf(" ") != -1 ||
    password.toLowerCase().includes(userName.toLowerCase()) != -1
  ) {
    return false;
  }

  return true;
}

console.log(isValidPassword("chicken123", "chick"));

*/

/*

function avg(numArray) {
  let total = 0;
  for (let num of numArray) {
    console.log(num);
    total += num;
  }

  return total / numArray.length;
}

console.log(avg([10, 4, 5]));

*/

/*
// pangram

function isPangram(sentence) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  sentence = sentence.toLowerCase();
  for (let alphabet of alphabets) {
    if (!sentence.includes(alphabet)) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The five boxing wizards jump quickly"));

*/

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  let suit = ["Club", "Spade", "Heart", "Diamond"];

  let cardValue = Math.floor(Math.random() * 13);
  let cardSuit = pick(suit);

  if (cardValue == 0) {
    cardValue = "A";
  } else if ((cardValue = 11)) {
    cardValue = "J";
  } else if ((cardValue = 12)) {
    cardValue = "Q";
  } else if ((cardValue = 13)) {
    cardValue = "K";
  }

  return { card: cardValue, suit: cardSuit };
}

console.log(getCard());
