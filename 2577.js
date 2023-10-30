const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

let num1 = input[0];
let num2 = input[1];
let num3 = input[2];

let xx = num1 * num2 * num3 ;
let result = String(xx);
let answer = result.split("").map(Number);
let arr = new Array(10).fill(0);

for(let i = 0 ; i< answer.length ; i++){
  for(let j = 0 ; j<arr.length; j++){
    if(answer[i] != j){
      continue;
    }else if(answer[i] == j){
      arr[j]++
;    }
  }

} console.log(arr.join("\n"));
