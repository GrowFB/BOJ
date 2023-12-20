const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let result = [];

for (let i = 1; i <= input.length; i++) {
  for (let j = 0; j <= input.length - i; j++) {
    result.push(input.slice(j, j + i));
  }
}

let ans = new Set(result).size;
console.log(ans);
