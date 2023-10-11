const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input[0]);


for(let i = 1 ; i<=num ; i++){
  let temp = 0;
    let word = input[i].split("")
    for(let j = 0; j<word.length ;j++){
      if(temp <0){
        break;
      }else{
      if(word[j] == '('){
        temp = temp + 1;
      }else if(word[j] == ')'){
        temp = temp - 1;
      }
    }
    }
      if(temp === 0){
        console.log('YES');
      }else if( temp !== 0){
        console.log('NO');
      }
}
  