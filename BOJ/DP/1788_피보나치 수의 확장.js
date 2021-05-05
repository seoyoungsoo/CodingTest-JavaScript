// 1788번 피보나치 수의 확장

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solution = (input) => {
  const n = input[0];
  const dp = [0, 1];
  let flag = 0;

  if (n > 0) flag = 1;
  else if (n < 0) flag = -1;

  for (let i = 2; i <= Math.abs(n); i++) {
    dp.push((dp[dp.length-1] + dp[dp.length-2]) % 1000000000)
  }

  if (flag === -1) {
    if (Math.abs(n) % 2 !== 0) flag *= -1;
  }

  console.log(flag);
  console.log(dp[Math.abs(n)]);
}

const input = [];
rl.on('line', (line) => {
  input.push(+line);
}).on(('close'), () => {
  solution(input);
  process.exit();
})