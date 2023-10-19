const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let input3 = [...input];
let arr1 = input3.sort((a, b) => a - b).map(Number);
let input2 = [...input];
let arr2 = input2.sort((a, b) => b - a).map(Number);
let result = "";

if (JSON.stringify(input) === JSON.stringify(arr1)) {
  result = "ascending";
} else if (JSON.stringify(input) === JSON.stringify(arr2)) {
  result = "descending";
} else {
  result = "mixed";
}
console.log(result);
