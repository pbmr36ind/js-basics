// Async Functions
//console.log("Hello Async.");

// Async - Example 1

async function greet() {
  return "Hello from Async !!!";
}

// call and handle the promise
greet().then((val) => {
  console.log(val);
});

// Async add function
async function add(x, y) {
  // throw error if x / y is not number
  if (typeof x !== "number" || typeof y !== "number") {
    throw "X and Y must be numbers !!!";
  }

  return x + y;
}

// call the function add and handle the promises
add("e", "r")
  .then((res) => {
    console.log("Result : ", res);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
