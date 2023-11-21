const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

if(input%2 != 0 ){
    console.log('SK')
}else{
    console.log('CY')
}