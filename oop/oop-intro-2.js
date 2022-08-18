// Intro to OOP

/*
function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

console.log("hex(255,100,25) :", hex(255, 100, 25));
*/

// Grouping the function togther
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;

  // rgb method
  color.rgb = function () {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  };

  color.hex = function () {
    return (
      "#" +
      ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)
        .toString(16)
        .slice(1)
    );
  };

  // return color object
  return color;
}

const firstColor = makeColor(35, 45, 210);
console.log(`rgb func call:`, firstColor.rgb());
console.log(`hex func call:`, firstColor.hex());
