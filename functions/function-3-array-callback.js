// Array Callbacks - forEach

/*
const fruits = ["apple", "orange", "banana"];

fruits.forEach((fr) => {
  console.log(fr);
});

*/

/*

const nums = [10, 11, 12, 13, 14, 15];

function doubleFunc(n) {
  console.log(n * 2);
}

nums.forEach(doubleFunc);
//doubleFunc(10)
//doubleFunc(11)
//doubleFunc(12)
//doubleFunc(13)
//doubleFunc(14)
//doubleFunc(15)

*/

/*
const books = [
  {
    name: "Rubber",
    author: "Jeyamohan",
    rating: "4.8",
  },
  {
    name: "Mithavai",
    author: "Nanjil Nadan",
    rating: "4.2",
  },
  {
    name: "Thirumalai Thirudan",
    author: "Bhaskar",
    rating: "4.0",
  },
];

books.forEach((book, idx) => {
  console.log(` ${idx + 1}. Book Name : ${book.name} `);
});

/*
// for loop
for (book of books) {
  console.log(` Book Name : ${book.name} `);
}
*/

// MAP function in Arrays

/*
const nums = [1, 2, 3, 4, 5];

const squareNums = nums.map(function (n) {
  return n * n;
});

console.log(`nums : ${nums}`);

console.log(`squareNums : ${squareNums}`);

*/

/*

const nums = [11, 20, 32, 46, 58];

const numDetails = nums.map(function (n) {
  return {
    value: n,
    isEven: n % 2 == 0,
  };
});

console.log(numDetails);

*/

/*

const words = ["asap", "fyi", "byob", "diy"];

const wordsFmtd = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});

console.log(words);

console.log(wordsFmtd);

*/

/*

const books = [
  {
    name: "Rubber",
    author: "Jeyamohan",
    rating: "4.8",
  },
  {
    name: "Mithavai",
    author: "Nanjil Nadan",
    rating: "4.2",
  },
  {
    name: "Thirumalai Thirudan",
    author: "Bhaskar",
    rating: "4.0",
  },
];

const bookTitle = books.map(function (book) {
  return book.name;
});

console.log(bookTitle);

*/

// Arrow Functions -

/*
const square = function (n) {
  return n * n;
};

const sqArrow = (n) => {
  return n * n;
};

console.log(square(14));

console.log(sqArrow(14));

const isOdd = (num) => {
  return num % 2 != 0;
};



console.log(isOdd(7));

*/

// Arrow Functions - with implicit return

/*
const nums = [2, 3, 8, 12];

const squareArray = (inpArr) => {
  return inpArr.map((n) => n * n);
};

console.log(nums);

// console.log(squareArray(nums));

const numTypeArray = (inpArr) => {
  return inpArr.map((n) => {
    return {
      value: n,
      type: n % 2 === 0 ? "Even" : "Odd",
    };
  });
};

console.log(numTypeArray(nums));


*/

// Arrays - Find method

/*
const fruits = ["apple", "kiwi", "orange", "banana"];

const fruitSelected = fruits.find((fruit) => {
  return fruit.includes("ang");
});

console.log(fruitSelected);
*/

/*
const books = [
  {
    name: "Mithavai",
    author: "Nanjil Nadan",
    rating: 4.6,
  },
  {
    name: "Thirumalai Thirudan",
    author: "Bhaskar",
    rating: 4.0,
  },
  {
    name: "Rubber",
    author: "Jeyamohan",
    rating: 4.8,
  },
];

const greatBooks = books.find((book) => {
  return book.rating > 4.5;
});

console.log(greatBooks);

*/

// Arrays - Filter Method

/*
const nums = [1, 2, 3, 8, 11, 12, 15];

const odds = nums.filter((n) => {
  return n % 2 === 1;
});

const evens = nums.filter((n) => {
  return n % 2 === 0;
});

console.log(odds);

console.log(evens);

*/
/*
const books = [
  {
    name: "Mithavai",
    author: "Nanjil Nadan",
    rating: 4.6,
    genres: ["fiction", "thriller"],
  },
  {
    name: "Thirumalai Thirudan",
    author: "Bhaskar",
    rating: 4.0,
    genres: ["epic", "history"],
  },
  {
    name: "Rubber",
    author: "Jeyamohan",
    rating: 4.8,
    genres: ["life", "fiction"],
  },
];
*/
/*
const greatBooks = books.filter((book) => {
  return book.rating > 4.5;
});

console.log(greatBooks);
*/

/*
const fiction = books.filter((book) => {
  return book.genres.includes("fiction");
});

console.log(fiction);

*/

// Every Method -

/*
const words = ["dot", "cat", "rat", "bat", "wig"];

/*
const all3letter = words.every((word) => {
  return word.length === 4;
});

console.log(all3letter);
*/

// SOME - Method

/*
const wordEndingWithg = words.some((word) => {
  return word[word.length - 1] === "g";
});

console.log(wordEndingWithg);

*/

// Array SORT method -

/*

const prices = [19.99, 299.99, 25.45, 16.45, 2310.34];

/*
prices.sort();

console.log(prices);
*/

/*
console.log("before sort:", prices);

const ascPrices = prices.slice().sort((price1, price2) => {
  return price1 - price2;
});

console.log("sorted asc : ", ascPrices);

const descPrices = prices.slice().sort((price1, price2) => {
  return price2 - price1;
});

console.log("sorted desc : ", descPrices);

*/

// SORT Books array

/*
const books = [
  {
    name: "Vazhkai Oru Nadagam",
    author: "Pannalal Patel",
    rating: 4.7,
    genres: ["life", "non-fiction"],
  },

  {
    name: "Thirumalai Thirudan",
    author: "Bhaskar",
    rating: 4.0,
    genres: ["epic", "fiction"],
  },
  {
    name: "Mithavai",
    author: "Nanjil Nadan",
    rating: 4.6,
    genres: ["non-fiction", "thriller"],
  },
  {
    name: "Rubber",
    author: "Jeyamohan",
    rating: 4.8,
    genres: ["life", "non-fiction"],
  },
];

// sort by book name
const sortedBooks = books.sort((book1, book2) => {
  console.log(book1.name > book2.name);
  return book1.name > book2.name ? 1 : -1;
});

console.log(sortedBooks);

*/

// REDUCE Method -

/*
const prices = [3, 5, 6, 7, 8];

const sumPrices = prices.reduce((accumulator, currValue) => {
  return accumulator * currValue;
});

console.log(sumPrices);

*/

/*

const prices = [40.96, 20.21, 9.87, 55.65, 99.34, 36.22, 2.5];

const maxPrice = prices.reduce((maxPrice, currPrice) => {
  return Math.max(maxPrice, currPrice);
});

console.log(maxPrice);

const minPrice = prices.reduce((minPrice, currPrice) => {
  return Math.min(minPrice, currPrice);
});

console.log(minPrice);

*/

/*

const prices = [1, 2, 4, 5];

const sumPrices = prices.reduce((total, currPrice) => {
  return total + currPrice;
}, 20);

console.log(prices);

console.log(sumPrices);


*/

// Use REDUCE method to tally

const votes = ["y", "y", "n", "y", "n", "nota", "absent"];

/*
const results = votes.reduce((tally, vote) => {
  if (tally[vote]) {
    tally[vote]++;
  } else {
    tally[vote] = 1;
  }

  return tally;
}, {});

*/

const results = votes.reduce((tally, vote) => {
  tally[vote] = (tally[vote] || 0) + 1;

  return tally;
}, {});

console.log(results);
