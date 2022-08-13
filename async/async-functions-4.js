// Async Sequential Requests vs parallel requests

/*

// Sequential requests
async function getPokemonData() {
  // requests are handled sequentially
  const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");

  console.log(poke1.data.name);
  console.log(poke2.data.name);
  console.log(poke3.data.name);
}

*/

/*
// parallel
async function getPokemonData() {
  // requests are sent parallely
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  //console.log("Promise 1 : ", prom1);

  // processing the promise is sequential
  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;
  //console.log("Promise 1 : ", prom1);

  console.log(poke1.data.name);
  console.log(poke2.data.name);
  console.log(poke3.data.name);
}

getPokemonData();

*/

// Another example to show the difference

/*
function changeBodyColor(color, delay) {
  //return a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //change color
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}
*/

/*
// sequential light show
async function lightShow() {
  await changeBodyColor("teal", 1000);
  await changeBodyColor("cyan", 1000);
  await changeBodyColor("orange", 1000);
  await changeBodyColor("magenta", 1000);
}
*/

/*
//parallel
async function lightShow() {
  const p1 = changeBodyColor("teal", 1000);
  const p2 = changeBodyColor("cyan", 1000);
  const p3 = changeBodyColor("orange", 1000);
  const p4 = changeBodyColor("magenta", 1000);

  await p1;
  await p2;
  await p3;
  await p4;
}

lightShow();

*/

// Promise Helper Method - Promise.all

async function getPokemonData() {
  // requests are sent in parallel
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  //console.log("Promise 1 : ", prom1);

  // promise with array of resolved values
  const pokemonData = await Promise.all([prom1, prom2, prom3]);

  //console.log("Promise 1 : ", prom1);
  printResults(pokemonData);
}

function printResults(pokemonData) {
  for (let pokemon of pokemonData) {
    console.log("Pokemon Name:", pokemon.data.name);
  }
}

getPokemonData();
