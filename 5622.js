const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split('');

for( let i = 0 ; i <input.length ; i++){
  
  let alphNumber = input[i].charCodeAt();
  alphNumber >= 65 && alphNumber <= 67
    ? (input[i] = 2)
    : alphNumber >= 68 && alphNumber <= 70
    ? (input[i] = 3)
    : alphNumber >= 71 && alphNumber <= 73
    ? (input[i] = 4)
    : alphNumber >= 74 && alphNumber <= 76
    ? (input[i] = 5)
    : alphNumber >= 77 && alphNumber <= 79
    ? (input[i] = 6)
    : alphNumber >= 80 && alphNumber <= 83
    ? (input[i] = 7)
    : alphNumber >= 84 && alphNumber <= 86
    ? (input[i] = 8)
    : alphNumber >= 87 && alphNumber <= 90
    ? (input[i] = 9)
    : 0;   


  }  
  let overTime = 1;
  let minimumTime = input.map((e) => e + overTime).reduce((a, b) => a + b);
  
  console.log(minimumTime)
