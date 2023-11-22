const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim('');


let zero = 0
let one = 0

if(input[0] == 0){
  zero++
}else{
  one++
}

  for(let i = 1 ; i < input.length ; i++){
    if(input[i] ==  1 ){
      if(input[i] != input[i-1]){
        one++
      }else if(input[i] == input[i-1]){
        continue
      }
    }
    if(input[i] ==  0 ){
      if(input[i] != input[i-1]){
        zero++
      }else if(input[i] == input[i-1]){
        continue
      }
    }

  } 
console.log(Math.min(one,zero))