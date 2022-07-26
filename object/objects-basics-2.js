/*
const getStats = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((sum, r) => {
    return sum + r;
  });

  const avg = sum / arr.length;

  return {
    min: min,
    max: max,
    sum: sum,
    avg: avg,
  };
};

*/

// Shorthand syntax

/*
const getStats = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((sum, r) => {
    return sum + r;
  });

  const avg = sum / arr.length;

  return {
    min,
    max,
    sum,
    avg,
  };
};

const movieReviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const movieStats = getStats(movieReviews);

console.log("Movie Stats : ", movieStats);

*/

// COMPUTED Properties - New Syntax
//  By computed properties we mean that
//    we can create object properties dynamically.

/*
const person = "Jools Holland";
const role = "Actor";

const person2 = "James Cameron";
const role2 = "Director";

*/

/*

//create a object
const team = {};

// create object properties from variables

team[role] = person;
team[role2] = person2;

console.log("Object - team : ", team);
*/

// Shorthand syntax for computed properties.

/*

const team = {
  [role]: person,
  [role2]: person2,
};

console.log("Object - team : ", team);

*/

// A function to add property to the object passed
/*
const person = "Jools Holland";
const role = "Actor";

const person2 = "James Cameron";
const role2 = "Director";

const team = {
  [role]: person,
  [role2]: person2,
};

*/

/*
function addProp(obj, k, v) {
  const objCopy = { ...obj };
  objCopy[k] = v;
  return objCopy;
}
*/

// shorthand using spread
/*
const addProp = (obj, k, v) => {
  return {
    ...obj,
    [k]: v,
  };
};
*/

/*

// shorthand in one line
const addProp = (obj, k, v) => ({ ...obj, [k]: v });

const newTeam = addProp(team, "Comedian", "Vadivelu");

console.log(newTeam);
*/

//-------------------------------------------

// Methods in Objects

/*
const mathOps = {
  add: (x, y) => {
    return x + y;
  },

  subtract: (x, y) => {
    return x - y;
  },
};

console.log("Ops Add : ", mathOps.add(100, 25));

*/

/*

const mathOps = {
  add(x, y) {
    return x + y;
  },

  subtract(x, y) {
    return x - y;
  },
};

console.log("Ops Add : ", mathOps.add(110, 25));

*/

// THIS Keyword in JS -

/*

function sayHI() {
  console.log(this);
}

sayHI();

*/

// use this inside a Objects method.

/*
const person = {
  fname: "praveen",
  lname: "babu",
  nickName: "bheem",
  fullName() {
    return `${this.lname}, ${this.fname} aka ${this.nickName}`;
  },
};
*/

/*

const person = {
  fname: "praveen",
  lname: "babu",
  nickName: "bheem",
  fullName() {
    const { fname, lname, nickName } = this; // destructure this
    return `${lname}, ${fname} aka. ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`BIO : ${fullName} is a person !!! `);
  },
  laugh() {
    console.log(this);
    console.log(`${this.nickName} says HA HA HA HA HA !!!! `);
  },
};
*/
/*
const printBio = person.printBio;

printBio();
*/

// arrow function
//person.laugh();

// Annoyomatc Demo - to understand this inside object & setInterval & arrow function.
/*
const annoyer = {
  phrases: ["Yov", "Vaya", "Poya", "Venna", "literally", "stop"],

  pickPhrase() {
    // destructure - get phrases from this object
    const { phrases } = this;
    //get random idx for phrase selection
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },

  // regular function in shorthand
  start() {
    //console.log(this);
    let that = this;
    //save the id to stop it later
    this.timerId = setInterval(() => {
      // to see whats the value of this
      //console.log("this:", this);
      //console.log("that:", that);
      console.log(this.pickPhrase());
    }, 2000);
  },

  stop() {
    console.log(this.timerId);
    clearInterval(this.timerId);
  },
};

*/

// DECK of Cards 

/*
// makedeck() using regular functions 

function makeDeck() {
  // Symbols & Numbers
  const symbols = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = "A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K";

  //output deck
  const deck = [];

  //loop values
  for(let symbol of symbols) {

    // loop symbols
    for(let value of values.split(",")) {

      deck.push( {value, symbol } );

    }

  }

  // return deck
  return deck;
}

// draw the top card 
function drawCard(deck) {
  return deck.pop();
}

const myDeck = makeDeck();
const card1 = drawCard(myDeck);
*/


// Deck using objects 

/*

const myDeck = {

  deck : [],

  // Symbols & Numbers
  symbols : ['hearts', 'diamonds', 'spades', 'clubs'],
  values : "A,2,3,4,5,6,7,8,9,10,J,Q,K",

  initialize() {

    //loop values
    for(let symbol of this.symbols) {

      // loop symbols
      for(let value of this.values.split(",")) {
          this.deck.push( {value, symbol } );
      }
    }
  },

  drawnCards : [],

  // draw one card at the top - 
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },

  // draw multiple cards
  drawMultipleCards(nums) {

    const mulCards = [];

    for(let i=0; i<nums; i++) {
      const card = this.drawCard();
      mulCards.push(card);
      this.drawnCards.push(card);
    }

    return mulCards;

  },

  shuffleDeck() {

    for(let i = this.deck.length-1 ; i >= 0; i-- ) {

      // random index
      const randomIdx = Math.floor(Math.random() * this.deck.length);

      //swap
      [this.deck[i], this.deck[randomIdx]] = [this.deck[randomIdx], this.deck[i]];
    }

    return this.deck;

  }

}

myDeck.initialize();

*/


// Create a DECK factory using a function 

const makeDeck = () => {

  // return an object
  return {

    // copied from above object
    deck : [],

    // Symbols & Numbers
    symbols : ['hearts', 'diamonds', 'spades', 'clubs'],
    values : "A,2,3,4,5,6,7,8,9,10,J,Q,K",

    initialize() {

      //loop values
      for(let symbol of this.symbols) {

        // loop symbols
        for(let value of this.values.split(",")) {
            this.deck.push( {value, symbol } );
        }
      }
    },

    drawnCards : [],

    // draw one card at the top - 
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },

    // draw multiple cards
    drawMultipleCards(nums) {

      const mulCards = [];

      for(let i=0; i<nums; i++) {
        const card = this.drawCard();
        mulCards.push(card);
        this.drawnCards.push(card);
      }

      return mulCards;

    },

    shuffleDeck() {

      for(let i = this.deck.length-1 ; i >= 0; i-- ) {
        // random index
        const randomIdx = Math.floor(Math.random() * this.deck.length);
        //swap
        [this.deck[i], this.deck[randomIdx]] = [this.deck[randomIdx], this.deck[i]];
      }

      return this.deck;
    }

  }

}

const deck1 = makeDeck();
deck1.initialize();
deck1.shuffleDeck();
const cardsFromDeck1 = deck1.drawMultipleCards(2);
console.log(cardsFromDeck1);

const deck2 = makeDeck();
deck2.initialize();
deck2.shuffleDeck();
const cardsFromDeck2 = deck2.drawMultipleCards(5);
console.log(cardsFromDeck2);