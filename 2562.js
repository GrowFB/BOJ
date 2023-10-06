const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let result = 1;
for(let i = 0 ; i < input.length ; i++){
  if(input[i] == Math.max(...input)){
    console.log(input[i]);
    break;
  }else if(input[i] != Math.max(...input)){
    result += 1 ;
  }

}console.log(result);
