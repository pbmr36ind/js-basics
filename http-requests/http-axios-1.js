// HTTP Requests using AXIOS

axios
  .get("https://swapi.dev/api/starships")
  .then((res) => {
    // get all the ships
    const ships = res.data.results;
    //print ship names
    for (let ship of ships) {
      console.log(ship.name);
    }
  })
  .catch((error) => {
    console.log("In Catch");
    console.log("Error:", error);
  });
