const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

for (i = 1; i < input.length; i++) {
  const arr = input[i].split(" ");
  const [H, N] = [Number(arr[0]), Number(arr[2])];
  const ans =
    N % H !== 0
      ? (N % H) * 100 + Math.floor(N / H + 1)
      : H * 100 + Math.floor(N / H);
  console.log(ans);
}

console.log(Math.floor(10 / 6 + 1));
