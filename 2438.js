const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let n = parseInt(input);
let s = '';

for( let i = 0 ; i < n ; i++){
  s ="";
  
  for(let j = n-1 ; j>= 0 ; j--){
    s += j > i ? " " : '*';
    //j가 i 보다 큰 경우는 공백을 더함
    // i가 j보다 작은 경우는 *을 더함
  }
  console.log(s);
}