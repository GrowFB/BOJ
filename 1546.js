const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = parseInt(input[0]);
let score = input[1].split(" ");

const max = Math.max(...score);
let sum = 0;

for(let i = 0; i <n ; i++){
  sum += score[i]/max*100;
}
console.log(sum/n);