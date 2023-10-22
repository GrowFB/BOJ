const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

input.shift();

let result = [];
for (let i = 0; i < input.length; i++) {
  result.push(input[i].split(" ").map(Number));
}

result.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});
console.log(result.map((x) => x.join(" ")).join("\n"));
