const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let result = [];

for (let i = 1; i < input.length; i++) {
  result.push(input[i].split(" ").map(Number));
}

result.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else if (a[1] != b[1]) {
    return a[1] - b[1];
  }
});
console.log(result.map((x) => x.join(" ")).join("\n"));
