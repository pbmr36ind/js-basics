// Learning how to make http request in JS 
// Original way - XMLHttpRequest (not used nowadays)
/*
function reqListener () {
    console.log(this.responseText);
  }
  
  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://www.example.org/example.txt");
  oReq.send();
  */

/*
// Lesson - 1

  // New Request
const firtReq = new XMLHttpRequest();

firtReq.addEventListener("load", () => {
    console.log("It worked");
});

firtReq.addEventListener("error", () => {
    console.log("Error");
});


firtReq.open("GET", "https://swapi.dev/api/starshipss/5/");

// send the request 
firtReq.send();

console.log("Request Sent.");

*/

// Lesson - 2 - Reading the response text. Converting to JSON and printing. 

  // New Request
  const firtReq = new XMLHttpRequest();

  firtReq.addEventListener("load", () => {
      console.log("It worked");
      //console.log("Response Text : ", firtReq.responseText);

      const jsonData = JSON.parse(firtReq.responseText);

      //console.log("Response JSON : ", jsonData);

      for(let ship of jsonData.results) {
        console.log("Ship Name : ", ship.name);
      }

  });
  
  firtReq.addEventListener("error", () => {
      console.log("Error");
  });
  
  
  firtReq.open("GET", "https://swapi.dev/api/starships/");
  
  // send the request 
  firtReq.send();
  
  console.log("Request Sent.");