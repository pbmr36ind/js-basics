//console.log("Hello, Go Fetch.");

// Lesson Fetch REquest -

fetch("https://swapi.dev/api/starshipss/")
  .then((res) => {
    //console.log(res);

    // if no response
    if (!res.ok) {
      //
      console.log("*** URL Request Error. ", res.status);
      //throw error - for catch() to process it.

      throw new Error(`Status: ${res.status} / ok: ${res.ok}`);
    } else {
      // process response
      res.json().then((data) => {
        //get all ships
        const ships = data.results;

        // print all ship name
        for (let ship of ships) {
          console.log(`Ship Name : ${ship.name}`);
        }
      });
    }
  })
  .catch((error) => {
    console.log("Error during fetch. ", error);
  });
