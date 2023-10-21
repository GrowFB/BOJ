const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
let answer = [];

// for (let i = 0; i < input.length - 1; i++) {
//   let arr = input[i].split("");
//   let arr2 = [...arr];
//   arr2.reverse();
//   arr.pop();
//   arr2.shift();

//   if (arr.toString() === arr2.toString()) {
//     console.log("yes");
//   } else if (arr.toString() !== arr2.toString()) {
//     console.log("no");
//   }
// }
// 억까 문제 노드와 백준 출력값이 다르다...

function sol(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    if (arr[start] == arr[end]) return sol(arr, start + 1, end - 1);
    else return "no";
  } else return "yes";
}

for (let i = 0; i < input.length - 1; i++) {
  let list = String(input[i])
    .split("")
    .map((v) => String(v));
  let ans = sol(list, 0, list.length - 1);
  answer.push(ans);
}
console.log(answer.join("\n"));
