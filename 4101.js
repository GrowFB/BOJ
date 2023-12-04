const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let a = input[0].split(" ").map(Number);

for (let i = 0; i < input.length; i++) {
  let a = input[i].split(" ").map(Number);
  if (a[0] > a[1]) {
    console.log("Yes");
  } else if (a[0] == 0 && a[1] == 0) {
    break;
  } else {
    console.log("No");
  }
}
