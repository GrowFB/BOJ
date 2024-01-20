const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

function CNT(n, m) {
  const temp = [];
  for (let i = 1; i <= 1000; i++) {
    for (let j = 0; j < i; j++) {
      temp.push(i);
      if (temp.length >= m) {
        break;
      }
    }
  }
  return temp.slice(n - 1, m).reduce((a, b) => a + b, 0);
}

console.log(CNT(input[0], input[1]));
