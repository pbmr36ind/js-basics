// loop basics

// for loop

/*
for (let i = 0; i < 10; i++) {
  console.log(i, " Hello World");
}
*/

/*

let table = 5;

for (let i = 1; i < 10; i++) {
  console.log(` ${i} x ${table} = ${i * table}`);
}

*/

/*

const fruits = ["Apple", "Orange", "Mango", "Banana", "Lemon"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit[${i}] = ${fruits[i]}`);
}

*/
/*

// Array of Objects

const movies = [
  {
    name: "Vikram",
    rating: 4.0,
  },

  {
    name: "Hondo",
    rating: 5.0,
  },

  {
    name: "Red River",
    rating: 4.9,
  },
];

for (let i = 0; i < movies.length; i++) {
  let movie = movies[i];
  console.log(`Movie : ${movie.name} || Rating : ${movie.rating}`);
}

*/

/*

// looping string

const word = "piano voilin";

let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

console.log(`Reversed Word : ${reversedWord}`);

*/

/*

for (let i = 1; i <= 5; i++) {
  console.log(i);
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

*/

//while loop

/*

let i = 0;

while (i < 5) {
  console.log(`i : ${i}`);
  i++;
}

*/

/* guessing number 
const target = 4;

let guess = -1;

console.log(`Target : ${target}`);

let counter = 1;

while (guess !== target) {
  guess = Math.floor(Math.random() * 4) + 1;

  console.log(`Guess : ${guess}`);

  if (counter > 5) {
    break;
  } else {
    counter++;
  }
}

if (guess == target) {
  console.log(`Congrats you win !!! `);
} else {
  console.log(`Better luck next time !!! `);
}

*/

// FOR...OF  loop

/*
let fruits = ["apple", "mango", "banana", "peach"];

for (let fruit of fruits) {
  console.log(fruit);
}

const name = "praveen";

for (let ch of name) {
  console.log(ch);
}


*/

// FOR...OF loop with Objects

/*
const movieReviews = {
  "The Shawshank Redemption": 9.0,
  "The Godfather": 9.2,
  "The Dark Knight": 9.0,
  Amadeus: 10,
  "12 Angry Men": 8.9,
  "Schindler's List": 8.9,
  "Pulp Fiction": 8.9,
  Coraline: 7.5,
};*/

/*
for (let movie of Object.keys(movieReviews)) {
  console.log(`Movie Name : ${movie} and Review is : ${movieReviews[movie]}`);
}*/

/*
let totalScore = 0;

const ratings = Object.values(movieReviews);

for (let rating of ratings) {
  totalScore += rating;
}

console.log(`Average rating is : ${totalScore / ratings.length} `);

*/

// FOR...IN

/*
const movieReviews = {
  "The Shawshank Redemption": 9.0,
  "The Godfather": 9.2,
  "The Dark Knight": 9.0,
  Amadeus: 10,
  "12 Angry Men": 8.9,
  "Schindler's List": 8.9,
  "Pulp Fiction": 8.9,
  Coraline: 7.5,
};

for (let movie in movieReviews) {
  console.log(movie, movieReviews[movie]);
}*/

let fruits = ["apple", "mango", "banana", "peach"];

for (let fruit in fruits) {
  console.log(fruit, fruits[fruit]);
}
