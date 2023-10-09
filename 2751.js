const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let arr = new Array(input.length);

for(let i = 0 ; i <input.length ; i++){
  arr[i] = parseInt(input[i]);
}
let num = new Set(arr);
let newarr = [...num].map(Number);

const temp = newarr.sort((a, b) => {
    return a - b;
  });
console.log(temp.join("\n"));

