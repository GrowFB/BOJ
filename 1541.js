const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let munja = input.split("-");

let result = 0;
let temp = [];

munja.map((c) => {
  temp.push(
    c
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b)
  );
});

result = temp[0];

for (let i = 1; i < temp.length; i++) {
  result -= temp[i];
}

console.log(result);
