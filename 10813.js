const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = input[0].split(" ").map(Number);
let basket = new Array(n[0]);
let num = 1;
let temp = '';
for(let i = 0; i < n[0] ; i++){
  basket[i] = num;
  num += 1 ;
}

for(let i = 1 ; i <= n[1] ; i++){
  let arr = input[i].split(" ").map(Number);
  let start = arr[0];
  let last = arr[1];
  for(let j = start-1 ; j<=last-1 ; j++){
    temp = basket[j];
    basket[j] = basket[last-1];
    basket[last-1] = temp;
    if( j < last-1){
      temp = basket[j+1];
      basket[j+1] = basket[last-1];
      basket[last-1] = temp;
    }
  }
}console.log(basket.join(" "));
