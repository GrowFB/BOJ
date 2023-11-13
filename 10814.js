const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

input.shift();

let answer = [];

for (let i = 0; i < input.length; i++) {
  answer[i] = input[i].split(" ");
}
answer.sort((a, b) => {
  return a[0] - b[0];
});
console.log(answer.map((x) => x.join(" ")).join("\n"));
