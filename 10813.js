const fs = require('fs'); 
const { start } = require('repl');
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input[0].split(" ").map(Number);
let n = parseInt(num[0]);
let m = parseInt(num[1]);

let basket = new Array(n);

for(let i = 0; i < n ; i++ ){
  basket[i] = i+1;
}
for(let i = 1; i<= m ; i++){

  let sss = input[i].split(" ").map(Number);

  let start = sss[0];
  let end = sss[1];

  [basket[start-1],basket[end-1]]=[basket[end-1],basket[start-1]];
}
console.log(basket.join(" "));