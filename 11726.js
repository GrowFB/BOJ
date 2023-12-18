const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let box = [0, 1, 2];

for (let i = 3; i <= input; i++) {
  box[i] = (box[i - 1] + box[i - 2]) % 10007;
}

console.log(box[input]);
