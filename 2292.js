const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let bang = 1;
let block = 1;

while (block < input) {
  block += 6 * bang;

  bang++;
}

console.log(bang);
