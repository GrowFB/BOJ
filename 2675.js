const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = input[0];

for(let i = 1 ; i <= n ; i++){
  let answer = "";
  let num = input[i].split(" ");
  let xx = parseInt(num[0]);
  let sum = num[1];
  
  for(let j = 0 ; j < sum.length ; j++){
    for(let c = 0 ; c < xx ; c++){
      answer += sum[j];
    }
      
  }
  console.log(answer);
} 