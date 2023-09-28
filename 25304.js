const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let result = parseInt(input[0]);
let mg = parseInt(input[1]);

let sum = 0;

for( let i = 2 ; i < mg + 2 ; i++){
 
  let arr1 = input[i].split(" ").map(Number);
  
  sum += arr1[0] * arr1[1];
}

if(result == sum){
  console.log('Yes');
}else{
  console.log('No');
}
