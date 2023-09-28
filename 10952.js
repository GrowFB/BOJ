const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");


let i = 0;

while(i< input.length){
  let num = input[i].split(" ").map(Number);

  if(num[0]!= 0 && num[1]!= 0){
    console.log(num[0]+num[1]);
  }else{
    break;
  }
  i++;
}