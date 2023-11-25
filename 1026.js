const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input.shift());

let a = input[0].split(" ").map(Number);
a.sort((a, b) => a - b);

let b = input[1].split(" ").map(Number);
let result = 0;
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (b[j] == Math.max(...b)) {
      result = result + b[j] * a[i];
      b.shift();
      break;
    } else {
      b.push(b.shift());
      j--;
    }
  }
}
console.log(result);
