const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = parseInt(input[0]);
let result = "";


for( let i = 1 ; i < n + 1 ; i++){
  
    let arr = input[i].split(" ").map(Number);
    result = arr[0] + arr[1];

    console.log(`Case #${i}:`,`${arr[0]} + ${arr[1]} =`,`${result}`);
}