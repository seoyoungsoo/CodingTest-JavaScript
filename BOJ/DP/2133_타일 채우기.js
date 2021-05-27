// 2133번 타일 채우기

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `2`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = parseInt(input());
const dp = Array.from({length:31}, () => 0);
dp[0] = 1;

for (let i = 2; i < N + 1; i += 2) {
  dp[i] = dp[i-2] * 3;
  for (let j = 0; j < i - 2; j += 2) {
    dp[i] += dp[j] * 2;
  }
}

console.log(dp[N]);