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
