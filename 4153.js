const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let a = input[i].split(" ").map(Number);

  if (a[0] * a[0] + a[1] * a[1] == a[2] * a[2]) {
    if (a[0] !== 0) {
      console.log("right");
    }
  } else {
    console.log("wrong");
  }
}
