const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let a =input[0].split(" ").map(Number);
let n = a[0];
let num = a[1];

let arr = input[1].split(" ").map(Number);
arr.sort((a,b)=> a-b);

console.log(arr[num-1]);