const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = input[0].split(" ").map(Number);
let num = input[1].split(" ").map(Number);
let result = '';
for(let i = 0 ; i<n[0] ; i++){
  if(n[1] > num[i]){
    result += num[i]+' ';;
  }
}console.log(result);