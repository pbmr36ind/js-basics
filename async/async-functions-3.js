// Async Functions using multiple Await Keyword

// function to move the element using Chaining of Promises
const moveRight = (element, numOfPx, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const screenBoundary = document.body.clientWidth;

      const elmLeft = element.getBoundingClientRect().left;
      const elmRight = element.getBoundingClientRect().right;

      if (elmRight + numOfPx > screenBoundary) {
        reject("Reached Boundary");
      } else {
        console.log("Move Right");
        element.style.transform = `translateX(${elmLeft + numOfPx}px)`;
        resolve();
      }
    }, delay);
  });
};

//element to move
const btn1 = document.querySelector("button");

// function to call the moveRight
async function animateElementToRight() {
  await moveRight(btn1, 100, 1000);
  await moveRight(btn1, 100, 1000);
  await moveRight(btn1, 100, 1000);
  await moveRight(btn1, 100, 1000);
}

async function animateElementToLeft() {
  await moveRight(btn1, -100, 1000);
  await moveRight(btn1, -100, 1000);
  await moveRight(btn1, -100, 1000);
  await moveRight(btn1, -100, 1000);
}

// call the function
animateElementToRight().catch((err) => {
  console.log(`Error : `, err);
  // move button left
  animateElementToLeft().catch((err) => {
    console.log("Error", err);
  });
});
