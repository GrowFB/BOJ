const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let result = parseInt(input[0]);
let num = parseInt(input[1]);
let sum = 0;
for(let i = 2 ; i <= num+1 ; i++){
  let a = input[i].split(" ").map(Number);
  sum += a[0]*a[1];
 
}  
if(result == sum){
  console.log('Yes');
}else{
  console.log('No');
}