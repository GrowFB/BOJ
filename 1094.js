const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let x = parseInt(input)
let length = [64,32,16,8,4,2,1]
let cnt = 0 

for(let i = 0 ; i<8 ; i++){

  if(length[i] <= x && x != 0 ){
    cnt++
    x = x - length[i]
  }
  console.log(x)
}console.log(cnt)