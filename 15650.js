const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let num = input[0];
let length = input[1];
let result = [];
const dfs = (n) => {
  if (result.length == length) {
    console.log(result.join(" "));
  }

  for (let i = n; i <= num; i++) {
    if (result.length != length) {
      result.push(i);
      dfs(i);
      result.pop();
    }
  }
};

dfs(1);
