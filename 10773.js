const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

input.shift();
let temp = [];
input.forEach((item) =>{
  if( item == 0){
    temp.pop()
  }else{
    temp.push(item);
  }
})
console.log(temp.reduce((acc,cur) => acc+ cur,0));

