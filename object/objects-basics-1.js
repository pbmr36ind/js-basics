/*
const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
  100: "One Hundred",
};

console.log(fitBitData);

*/

// Arrays / Objects inside an Object

const student = {
  firstName: "David",
  lastName: "Jones",
  strength: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

/*

// Array of Objects -

const shoppingCart = [
  {
    product: "T Shirt",
    price: 5.99,
    quantity: 1,
  },
  {
    product: "Echo Dot",
    price: 29.99,
    quantity: 1,
  },
  {
    product: "Fire Stick",
    price: 39.99,
    quantity: 1,
  },
];

*/

// Object Equality

let numArr1 = [1, 2, 3];
let numArr2 = [1, 2, 3];

console.log(numArr1 == numArr2);

console.log(numArr1 === numArr2);
