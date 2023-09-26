const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const cook = parseInt(input[1]);
const current = input[0].trim().split(" ");

let hour = parseInt(current[0]);
let min = parseInt(current[1]);

min += cook ;

if(min >= 60){
  hour += Math.floor(min/60);
  min %= 60;

  if(hour >= 24 ){
    hour %=24;
  }
}

console.log(hour+ " " + min);