// 13699번 점화식

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solution = (input) => {
  const n = input[0];
  const dp = Array(40).fill(1);
  let left, right, tmp = 0;

  for (let i = 2; i <= n; i++) {
    left = 0;
    right = i - 1;
    while (left < i) {
      tmp += dp[left++] * dp[right--];
    }
    dp[i] = tmp;
    tmp = 0;
  }
  console.log(dp[n]);
}

const input = [];
rl.on('line', (line) => {
  input.push(+line);
}).on(('close'), () => {
  solution(input);
  process.exit();
})