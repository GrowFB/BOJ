const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let answer = [];

for (let i = 0; i < input[0].length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] !== "\r") {
      answer.push(input[j][i]);
    }
  }
}

console.log(answer.join(""));
