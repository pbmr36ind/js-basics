/*let rating = 3;

if (rating === 3) {
  console.log("You are a Super Star !!!");
} else if (rating === 2) {
  console.log("Meets Expectations");
} else if (rating == 1) {
  console.log("Needs Improvement.");
} else {
  console.log("Work on it.");
}*/

/*
let highScore = 1400;
let userScore = 800;
let lowScore = 100;

if (userScore > highScore) {
  console.log(`You beat the high score. New high score is ${userScore}`);
  highScore = userScore;
} else {
  if (userScore > lowScore && userScore < highScore) {
    console.log(
      `Good Score ${userScore}. Your score did not beat the high score ${highScore}`
    );
  } else if (userScore < lowScore) {
    console.log(
      `New Low Score ${userScore}. Your score did beat the low score ${lowScore}`
    );
    lowScore = userScore;
  }
}
*/

/*

// Truthy or Falsy

let greenScore = NaN;

if (greenScore) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

*/

/*
// NOT ! expression

let age = 16;

if (!(age > 18)) {
  console.log(`Under age. ${age} No beer. `);
} else {
  console.log(`Adult`);
}

*/

/*

// Operator Precedence

let x = 7;

x == 7 || (x === 3 && x > 10);

*/

/*
// SWITCH statement

let day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

*/

//Ternary Operator

/*
let num = 10;
console.log(num > 5 ? "True" : "False");
*/

let status = "offline";
let color = "white";

color = status == "offline" ? "orange" : "green";

console.log(`${status} color is ${color}`);
