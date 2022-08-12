// Chaining HTTP Requests using AXIOS

/*

axios
  .get("https://swapi.dev/api/starships")
  .then((res) => {
    // get all the ships - page 1
    const ships = res.data.results;

    console.log("** Ships from Page 1:");
    //print ship names
    for (let ship of ships) {
      console.log(ship.name);
    }

    // chain next req - ships from page 2
    return axios.get(res.data.next);
  })
  .then((res) => {
    // get all the ships - page 2
    const ships = res.data.results;

    console.log("** Ships from Page 2:");
    //print ship names
    for (let ship of ships) {
      console.log(ship.name);
    }
  })
  .catch((error) => {
    console.log("In Catch");
    console.log(error);
  })

*/

// Lesson 2 - Refactor to have it little simpler.

const fetchNextShips = (url) => {
  return axios.get(url);
};

const printShips = (res) => {
  const shipsData = res.data;

  //console.log(shipsData.next);
  console.log("** Ships from new page. ");
  //print ship names
  for (let ship of shipsData.results) {
    console.log(ship.name);
  }
  // chain next request
  return Promise.resolve(shipsData.next);
};

fetchNextShips("https://swapi.dev/api/starships")
  .then(printShips)
  .then(fetchNextShips)
  .then(printShips)
  .catch((error) => {
    console.log("In Catch");
    console.log(error);
  });
