// Async Functions using Await Keyword

/*
async function getShips() {
  //return promise
  const res = await axios.get("https://swapi.dev/api/starships/");
  console.log("Results:", res.data);
}

getShips();

*/

// how to handle promise rejection

/*
// way 1 
async function getShips() {
  //return promise - wrong url
  const res = await axios.get("https://swapi.dev/api/starshipsaaa/");
  console.log("Results:", res.data);
}

// one way to use catch in async function call
getShips().catch((error) => {
  console.log("error:", error);
});
*/

// way 2
async function getShips() {
  //return promise - wrong url
  try {
    const res = await axios.get("https://swapi.dev/api/starshipsaaa/");
    console.log("Results:", res.data);
  } catch (err) {
    console.log("In catch.");
    console.log("error:", err);
  }
}

// one way to use catch in async function call
getShips();
