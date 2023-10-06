const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = parseInt(input[0]);

for(let i = 1 ; i <= n ; i++){
   let arr = input[i].split(" ").map(Number);
   console.log(`${arr[0]+arr[1]}`);
}

