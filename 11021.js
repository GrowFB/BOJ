const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input[0]);

for(let i = 1 ; i <=num ; i++){
    let a = input[i].split(" ").map(Number);
    let b = a[0]+a[1];
    console.log(`Case #${i}:`,`${b}`);
}