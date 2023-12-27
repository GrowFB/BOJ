const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input.shift();

let arr = input[0].split(" ").map(Number);

// for (let i = 2; i < input.length; i++) {
//   let numb = input[i].split(" ");

//   let arr2 = [...arr].slice(numb[0] - 1, numb[1]);
//   console.log(arr2.reduce((a, c) => a + c, 0));
// }
let ans = 0;
for (let i = 2; i < input.length; i++) {
  let numb = input[i].split(" ");
  let arr2 = [];
  for (let j = numb[0] - 1; j < numb[1]; j++) {
    arr2.push(arr[j]);
  }

  for (let k = 0; k < arr2.length; k++) {
    ans += arr2[k];
  }
  console.log(ans);
  ans = 0;
}
