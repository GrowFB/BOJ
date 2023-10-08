const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input[0]);

let arr = new Array(num);
for(let i = 0 ; i <num ; i++){
  arr[i] = input[i+1];
}

let newarr = new Set(arr);
let newarr2 = [...newarr];

const temp = newarr2.sort();

temp.sort((a,b) => a.length - b.length);
const result = temp.join('\n');
console.log(result);
