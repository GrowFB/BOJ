const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let N = parseInt(input)
let start = N - (String(N).length *9)
let M = start ;


while(true){
  let result = M
  for(let i = 0 ; i< String(M).length ; i++){
    result = result + parseInt(String(M).charAt(i))
  }if(result ==  N){
    console.log(M)
    break;
  }if(M >= N){
     console.log('0')
    break;
  }
  M++
}

