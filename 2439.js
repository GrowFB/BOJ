const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let n = parseInt(input);
let sum = '';
for(let i = 0 ; i <n ; i++){
  sum = '';
  for(let j = n-1 ; j >= 0 ; j--){
    if(j > i){
      sum = sum +' ';
    }else if( j <= i){
      sum = sum +'*';
    }
    
  }
  console.log(sum);
}  