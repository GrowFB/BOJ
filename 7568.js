const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
input.shift()
let cnt = 1 ;
let answer = [];

for(let i = 0 ; i< input.length ; i++){
  let num =  input[i].split(" ").map(Number)
    for(let j = 0 ; j< input.length; j++){
        let num2 = input[j].split(" ").map(Number)
        if(i !== j){
        if(num[0] < num2[0] && num[1] < num2[1]){
            cnt ++
        }
    }
    }
    answer[i] = cnt
    cnt = 1 ;
}console.log(answer.join(' '))