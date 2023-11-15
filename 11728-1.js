const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let arr1 = input[1].split(" ").map(Number);
let arr2 = input[2].split(" ").map(Number);
let num = input[0].split(" ").map(Number);



console.log([...arr1,...arr2].sort((a,b)=> a-b).join(" "));


