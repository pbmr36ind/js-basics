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
