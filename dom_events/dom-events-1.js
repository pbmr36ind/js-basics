/*

const buttonClick = () => {
  console.log("You clicked me !");
};

const buttondblClick = () => {
  console.log("You double clicked me !");
};

const rangeFunc = () => {
  console.log("Range changed");
};

// add event handlers to elements

const btn1 = document.querySelector("#btn1");
btn1.onclick = buttonClick;

btn1.ondblclick = buttondblClick;

const rangeElement = document.querySelector("#range1");
rangeElement.onchange = rangeFunc;

*/

/*
// Add event listeners using addEventListener method

const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function () {
  // console log
  console.log("You clicked me !!! ");
});

btn1.addEventListener("click", function () {
  // console log
  console.log("You clicked me again !!! ");
});

btn1.addEventListener("mouseover", function () {
  // console log
  btn1.innerText = "Dont Click Me!";
  console.log("Dont Click Me !!! ");
});

btn1.addEventListener("mouseout", function () {
  // console log
  btn1.innerText = "Click Me!";
  console.log("Click Me !!! ");
});

*/

// Add events to multiple elements
/*
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

const container = document.querySelector("#boxes");

const printColor = function () {
  //console.log("this->", this);
  console.log("Color->", this.style.backgroundColor);
};

//change header color
const changeHeaderColor = function (evt) {
  console.log("Event:", evt);
  //get header
  const header1 = document.querySelector("#header1");
  // change color of header
  header1.style.color = this.style.backgroundColor;
};

for (let color of colors) {
  // create new div
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.innerHTML = `<b>${color}</b>`;
  box.classList.add("box");
  container.appendChild(box);

  // add event listeners to the box
  box.addEventListener("click", printColor);

  //
  box.addEventListener("click", changeHeaderColor);
}

window.addEventListener("keypress", function (evt) {
  // console log key press event
  console.log(evt);
});

*/

// Key Event Handlers

/*

const inp1 = document.querySelector("#username");

// various key events and handlers

inp1.addEventListener("keydown", function (evt) {
  // console key down events
  console.log("key DOWN !");
});

inp1.addEventListener("keyup", function (evt) {
  // console key up events
  console.log("key UP !");
});

inp1.addEventListener("keypress", function (evt) {
  // console key press events
  console.log("key Press !");
});

*/

// Add items from input text when enter key is pressed
const inpItem = document.querySelector("#itemName");

const itemList = document.querySelector("#itemsList");

inpItem.addEventListener("keypress", function (evt) {
  // execute the logic only when enter key is pressed

  if (evt.key === "Enter" && this.value) {
    //create a new list item and add to the list.
    const newItem = document.createElement("li");
    newItem.innerText = this.value;

    //add to list
    itemList.appendChild(newItem);

    this.value = "";
  }
});
