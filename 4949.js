const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let cnt = 0 ;
// let cnt2 = 0 ;
let temp = [];

for(let j = 0 ; j < input.length ; j++){
  for(let i = 0 ; i < input[j].length ; i++){
  
  if(input[j].charAt(i) == '('){
    temp.push('(')
  }
  if(input[j].charAt(i) == ')'){
   if(temp[temp.length-1] == '('){
    temp.pop('')
   }else {
    temp.push(')')
   }

  }
  if(input[j].charAt(i) == '['){
   temp.push('[')
  }
  if(input[j].charAt(i) == ']'){
    if(temp[temp.length-1] == '['){
     temp.pop('')
    }else {
     temp.push(']')
    }
 
   }

}

if(input[j].charAt(0) != '.'){
  if(temp.length == 0 ){
    console.log('yes')
  }else {
    console.log('no')
  }
}
 temp = [];


}