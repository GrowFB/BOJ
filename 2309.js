const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

input.sort((a,b) => a - b)
let hap = input.reduce((prev,cur) => prev + cur,0)

let a = 0 ;
let b = 0;

for(let i = 0 ; i<input.length-1 ; i++){
  for(let j = i+1 ; j<input.length ; j++){
    if(hap - (input[i]+input[j]) == 100){
       a =  input[i] 
       b = input[j] 
      break;
    }
  }
}
let result = [];
for(let i = 0 ; i<input.length ; i++){
  if( input[i] !== a && input[i] !== b){
    result.push(input[i])
  }
}console.log(result.join('\n'))
