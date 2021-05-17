// 10944번 쉬운 계단 수
// 코드참조: https://kscodebase.tistory.com/344

const fs = require('fs');
const { parse } = require('path');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `2`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const mod = BigInt(1000000000);

const n = parseInt(input());
const dp = Array.from({length: n + 1}, () => []);

for (let i = 0; i < 10; i++) {
  if (i === 0) {
    dp[1][0] = BigInt(0);
  } else {
    dp[1][i] = BigInt(1);
  }
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j < 10; j++) {
    dp[i][j] = BigInt(0);
    if (j - 1 >= 0) dp[i][j] += dp[i-1][j-1];
    if (j + 1 <= 9) dp[i][j] += dp[i-1][j+1];
    dp[i][j] = BigInt(dp[i][j]) % mod;
  }
}

const sum = dp[n].reduce((acc, cur) => acc + cur);
console.log(String(sum % mod));