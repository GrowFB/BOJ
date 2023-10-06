
const { setServers } = require('dns/promises');
const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = parseInt(input[0]);
let num = parseInt(input[2]);
let ss = input[1].split(" ").map(Number);
let result = 0;

for(let i = 0 ; i < n ; i++){

if(ss[i] == num){
  result += 1;
  
}
}console.log(result);
