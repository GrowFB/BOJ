const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let box = [0, 1, 3];

for (let i = 3; i <= input; i++) {
  box[i] = ((box[i - 1] % 10007) + ((box[i - 2] * 2) % 10007)) % 10007;
}

console.log(box[input]);
