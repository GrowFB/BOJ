const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = input[0].split(" ").map(Number);

let basket = new Array(n[0]).fill(0);

function r(){
for(let i = 1 ; i <= n[1] ; i++){
  let sum = input[i].split(" ").map(Number);
  let start = sum[0];
  let last = sum[1];
  let ball = sum[2];

  for( let j = start - 1; j <= last -1; j++){
    basket[j] = ball;
  }

}console.log(basket.join(" "));}

   r();