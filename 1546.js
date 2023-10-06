const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input[0]);
let sj = input[1].split(" ").map(Number);

let m = Math.max(...sj);
let sum = 0;
 for(let i = 0 ; i<num; i++){
  sum += sj[i]/m*100 ;
 }console.log(sum/num);