const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();

const dp = new Array(N + 1).fill(BigInt(0));
dp[1] = BigInt(1);

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[N].toString());
