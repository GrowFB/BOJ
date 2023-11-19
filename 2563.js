const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input.shift())

let paper = new Array(100).fill().map(v => new Array(100).fill(0))
let cnt = 0 ;

for(let i = 0 ; i< num ; i++){
  const [x,y] = input[i].split(' ').map(Number)

  for(let j = x ; j< x + 10 ; j++){
    for(let k = y ; k< y + 10 ; k++){
      paper[j][k] = 1
    }
  }
}

for(let i = 0 ; i<paper.length ; i++){
  for(let j = 0 ; j<paper.length ; j++){
    if(paper[i][j] === 1){
      cnt++
    }
  }
}
console.log(cnt)