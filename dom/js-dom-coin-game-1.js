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

//coin object
const coin = document.querySelector("#coin");

// extract number from text with px ex: 10px
function extractPos(posStr) {
  if (!posStr) 
    return 0;

  return parseInt(posStr.slice(0, -2));
}

// move the coin pos random
function moveCoin(){
  const x = Math.floor(Math.random() * window.innerWidth - 10);
  const y = Math.floor(Math.random() * window.innerHeight - 10);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
} 


moveCoin();

//track key press events

window.addEventListener("keyup", function (evt) {

  let leftPos = extractPos(player.style.left);
  let topPos = extractPos(player.style.top);
  
  if ( evt.key === "ArrowRight"  || evt.key === "Right" ) {
    player.style.transform = 'scale(1, 1)';
    player.style.left = `${leftPos + 25}px`;
  } else if ( evt.key === "ArrowLeft" || evt.key === "Left"  ) {
    // change the image direction to left
    player.style.transform = 'scale(-1, 1)';
    player.style.left =`${leftPos - 25}px`;
  } else if ( evt.key === "ArrowDown" || evt.key === "Down") {
    player.style.top =`${topPos + 25}px`;
  } else if ( evt.key === "ArrowUp" || evt.key === "Up") {
    player.style.top =`${topPos - 25}px`;
  }

  // move the coin when the player touches the coin.
  if( isTouching(player, coin) ) {
    moveCoin();
  }

});
