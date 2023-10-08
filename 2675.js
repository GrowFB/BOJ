const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = parseInt(input[0]);


for(let i = 1 ; i <=n ; i++){
  let temp ='';
  let num = input[i].split(" ");
  let sum = parseInt(num[0]);
  let word = num[1];

  for(let j = 0 ; j <word.length ;j++){
    
    for(let k = 0 ; k<sum ; k++){  
    temp = temp + word[j];
    }
   
  }
  console.log(temp);
}