var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().split("\n");
var stack = [];
var answer = "";

for (var i in input) {
  if (input[i].split(" ").length === 1) {
    if (input[i] === "pop") {
      stack.length !== 0 ? (answer += stack.pop() + "\n") : (answer += "-1\n");
    } else if (input[i] === "size") {
      answer += String(stack.length) + "\n";
    } else if (input[i] === "empty") {
      stack.length !== 0 ? (answer += "0\n") : (answer += "1\n");
    } else if (input[i] === "top") {
      stack.length !== 0
        ? (answer += stack[stack.length - 1] + "\n")
        : (answer += "-1\n");
    }
  } else {
    stack.push(input[i].split(" ")[1]);
  }
}
console.log(answer);
