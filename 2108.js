const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

input.shift()
let result = '';

let center = Math.floor(input.length/2)
let sum = input.reduce((gab , cur) => gab + cur,0)
let ans1 = Math.round(sum/input.length)

input.sort((a,b) => a - b)

let num = 1;
let m = new Map();
let ans2 = [];
for(let i = 0 ; i<input.length ; i++){
  if(m.has(input[i])){
    let number = m.get(input[i])
    num = Math.max(num , number +1)
    m.set(input[i], number + 1)
  }else {
    m.set(input[i],1)
  }
}

for(val of m){
  if(val[1] == num){
    ans2.push(val[0])
  }
}





let ans3 = 0;
for(let i = input[0] ; i<input[input.length-1] ; i++){
  ans3 = ans3 + 1;
}


result += ans1 + '\n'
result += input[center] + '\n'
if(ans2.length > 1){
  result += ans2[1] + '\n'
}else{
  result += ans2[0] + '\n'
}
result += ans3
console.log(result)