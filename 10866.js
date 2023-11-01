var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().split("\n");
var queue = [];
var answer = "";
input.shift();

for (var i in input) {
  if (input[i].split(" ").length === 1) {
    if (input[i] === "pop_front") {
      if (queue.length !== 0) {
        answer += queue.shift() + "\n";
      } else {
        answer += "-1\n";
      }
    } else if (input[i] === "pop_back") {
      if (queue.length !== 0) {
        answer += queue.pop() + "\n";
      } else {
        answer += "-1\n";
      }
    } else if (input[i] === "size") {
      answer += queue.length + "\n";
    } else if (input[i] === "empty") {
      if (queue.length !== 0) {
        answer += "0\n";
      } else {
        answer += "1\n";
      }
    } else if (input[i] === "front") {
      if (queue.length !== 0) {
        answer += queue[0] + "\n";
      } else {
        answer += "-1\n";
      }
    } else if (input[i] === "back") {
      if (queue.length !== 0) {
        answer += queue[queue.length - 1] + "\n";
      } else {
        answer += "-1\n";
      }
    }
  } else {
    if (input[i].split(" ")[0] === "push_front") {
      queue.unshift(input[i].split(" ")[1]);
    } else {
      queue.push(input[i].split(" ")[1]);
    }
  }
}
console.log(answer);
