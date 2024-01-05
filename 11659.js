const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input[0].split(" ").map(Number);

let arr = input[1].split(" ").map(Number);
let list = Array(num[0] + 1).fill(0);
let result = [];
let sum = 0;
for (let i = 1; i <= num[0]; i++) {
  sum += arr[i - 1];
  list[i] = sum;
}

for (let j = 2; j < input.length; j++) {
  let numb = input[j].split(" ").map(Number);
  result.push(list[numb[1]] - list[numb[0] - 1]);
}

console.log(result.join("\n"));

// const arr = input[1].split(" ").map(Number);
// const sumArr = [0];
// const solution = [];

// arr.forEach((v, i) => {
//   sumArr[i + 1] = sumArr[i] + v;
// });

// // sumArr = [0, 5, 9, 12, 14, 15]
// // 각 요소 sumArr[i]는 arr의 i번째 수까지의 합이 된다

// input.slice(2).forEach((el) => {
//   const [i, j] = el.split(" ").map(Number);
//   solution.push(sumArr[j] - sumArr[i - 1]);
// });

// console.log(solution.join("\n"));
