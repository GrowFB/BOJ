const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = parseInt(input.shift())
let mid = Math.round(n*0.15)
let ans = [];
if(input.length != 0){
  input.sort((a,b) => a-b)
  for(let i = mid ; i<input.length-mid ; i++){
    ans[i-mid] = input[i]
  }
  
let sum = 0 ;

for(let j = 0 ; j < ans.length ; j++){
  
  sum = sum + parseInt(ans[j])
}
console.log(Math.round(sum/ans.length))}
else if(input.length == 0){
  console.log('0')
}
