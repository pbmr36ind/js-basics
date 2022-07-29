// Changing content of multiple elements

/*
const li_elems = document.querySelectorAll("li");
*/

//console.log(li_elems);

/*
// loop over elements
for (let i = 0; i < li_elems.length; i++) {
  // get innerHTML and print them
  //console.log(li_elems[i].innerText);

  //change them to a common text
  li_elems[i].innerText = "Not Available";
}*/

/*

for (let li of li_elems) {
  li.innerHTML = "<b> Not <i> Available</i><b>";
}

*/

// Changing styles of multiple elements

/*

const li_elems = document.querySelectorAll("li");
const colors = ["orange", "red", "yellow", "green"];

let colorIdx = 0;

// use the index available in forEach apply the colors

li_elems.forEach((li) => {
  if (colorIdx > colors.length - 1) {
    colorIdx = 0;
  }

  //apply the color from array
  li.style.color = colors[colorIdx++];
});
*/

// Manipulating css class through JS
/*

const todo_1 = document.querySelector("#todos .todo");

// get the class of the first todo element
let todo_1_class = todo_1.getAttribute("class");
console.log("todo_1 class : ", todo_1_class);

// apply a different css class
todo_1.setAttribute("class", "done");

todo_1_class = todo_1.getAttribute("class");
console.log("todo_1 class : ", todo_1_class);

*/

// Manipulating css class using classList

// classList

// Create new elements using createElement and adding it to other elements

// some of the code example are executed in console window - screenshots in notes.

// Append / Prepend & insertBefore -

/*
//append

function appendElement() {
  // unordered list -
  const ul = document.querySelector("ul");

  // create a new element
  const li_new = document.createElement("li");

  li_new.innerHTML = "Buy Groceries";
  li_new.classList.toggle("todo");

  ul.append(li_new);
}

*/

//insertBefore

/*
function insertElement() {
  // unordered list -
  const parent_ul = document.querySelector("ul");

  // select the element before which new element needs to be inserted
  const first_li = document.querySelector("ul li");

  // create new element
  const li_new = document.createElement("li");

  li_new.innerHTML = "Buy Groceries";
  li_new.classList.toggle("todo");

  // now insert
  parent_ul.insertBefore(li_new, first_li);
}
*/

//insertAdjacentElement -- beforeBegin / afterBegin / beforeEnd / afterEnd

/*
function insertAdjElem() {
  const para1 = document.querySelector("p");

  // create new element
  const italics_1 = document.createElement("i");

  italics_1.innerText = "This is your barcode.";
  italics_1.style = "color: teal; font-size: 35px";

  para1.insertAdjacentElement("beforeend", italics_1);
}

*/

// append & prepend

/*
function appendFunc() {
  const para1 = document.querySelector("p");
  const italics_1 = document.createElement("i");

  italics_1.innerText = "This is your barcode.";
  italics_1.style = "color: teal; font-size: 35px";

  para1.append(italics_1);
}
*/

// prepend
/*
function prependFunc() {
  const para1 = document.querySelector("p");
  const italics_1 = document.createElement("i");

  italics_1.innerText = "This is your barcode.";
  italics_1.style = "color: teal; font-size: 35px";

  para1.prepend(italics_1);
}

*/

// removeChild() & remove

// remove the p tag from header -
/*
function removeChildFunc() {
  // find header
  const header1 = document.querySelector("header");

  // find p tag inside header
  const para1 = header1.querySelector("p");

  // remove para from header
  return header1.removeChild(para1);
}

*/

// remove the element being called -

function removeFunc() {
  // find p tag inside header
  const para1 = document.querySelector("header p");

  // remove the element
  para1.remove();
}
