const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input[0]);
let result = "";

for( let i = 1 ; i <= num  ; i++){
    let a = input[i].split(" ").map(Number);
    result = a[0] + a[1];
    console.log(`Case #${i}:`,`${a[0]} + ${a[1]} =`,`${result}`);
}