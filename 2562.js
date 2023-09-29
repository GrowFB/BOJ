const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let count = '1';


for(let i = 0 ; i <= input.length ; i++){
    if(input[i] == Math.max(...input)){
    console.log(Math.max(...input));
    console.log(count);
    
    } else{
      count++
    }

}
