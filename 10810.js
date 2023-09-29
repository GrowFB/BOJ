const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input[0].split(" ").map(Number);
let n = parseInt(num[0]);
let m = parseInt(num[1]);

let basket = new Array(n).fill(0);

let start , end , ball ;

let i ;
for(i = 0 ; i <= m ; i++ ){
  let sss = input[i].split(" ").map(Number);

  start = sss[0];
  end = sss[1];
  ball = sss[2];

  for(let j = start - 1; j <= end -1 ; j ++ ) {
    
    basket[j] = ball;
    
  }

} 


console.log(basket.join(' '));
