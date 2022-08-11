// Chaining of Fetch Requests

// LEsson - Chaining of Fetch REquests

/*
fetch("https://swapi.dev/api/starships")
 .then( (res)=> {
    //console.log(res);
    if( !res.ok ) {
      throw new Error(`Status: ${res.status}`);
    } else {
      return res.json()
    }
 })
 .then((data) => {

    // get all ships
    const ships = data.results;

    console.log("First ship :", ships[0].name)

    const firstFilmURL = ships[0].films[0];

    // second request and return the promise
    return fetch(firstFilmURL);

  })
 .then( (res) => {
    // res from second request 
    if( !res.ok ) {
      throw new Error(`Status: ${res.status}`);
    } else {
      return res.json()
    }

  })
 .then((movieData)=>{
    console.log("first Film : ", movieData.title);
  })
 .catch( (err) => {
    console.log(err);
 })

 */


 // Cleaning up a bit using functions

 //function to check status of response and parse
 const checkStatusAndParse = (res) => {
  
    //console.log(res);
    if( !res.ok ) {
      throw new Error(`Status: ${res.status}`);
    } else {
      return res.json()
    }

 }
 // function - print ships
 const printShips = (data) => {
    // get all ships
    const ships = data.results;

    // Get first 10 ships
    for(let ship of ships) {
      console.log("Ship :", ship.name)
    }

    return Promise.resolve(data.next);
 }
 // function - to fetch next page of ships
 const fetchNextShips = (url) => {
  return fetch(url);
 }


 fetch("https://swapi.dev/api/starships")
 .then(checkStatusAndParse)
 .then(printShips)
 .then(fetchNextShips)
 .then(checkStatusAndParse)
 .then(printShips) 
 .catch( (err) => {
    console.log(err);
 })