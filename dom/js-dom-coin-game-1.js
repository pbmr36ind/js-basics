function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

//player object
const player = document.querySelector("#player");

function extractPos(posStr) {
  if (!posStr) return 0;
  console.log("left pos str:", posStr);
  return parseInt(posStr.slice(0, -2));
}

console.log("player:", player.style.left);

//track key press events

window.addEventListener("keyup", function (evt) {
  //print the key pressed
  console.log("evt:", evt.key);

  let leftPos = extractPos(player.style.left);

  console.log(leftPos);

  if ((evt.key = "ArrowRight")) {
    player.style.left = `${leftPos + 10}px`;
  } else if ((evt.key = "ArrowLeft")) {
    player.style.left -= 10;
  }
});
