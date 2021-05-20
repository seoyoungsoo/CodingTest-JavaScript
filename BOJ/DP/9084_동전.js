// 9084번 동전

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `3
2
1 2
1000
3
1 5 10
100
2
5 7
22`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const t = parseInt(input());
let n, m, coins, dp;

for (let _ = 0; _ < t; _++) {
  n = parseInt(input());
  coins = input().split(' ').map(e => parseInt(e));
  m = parseInt(input());
  dp = Array.from({length:m+1}, () => 0);
  dp[0] = 1;

  // n원을 만들 수 있는 경우의 수
  // 이전에 n원을 만들 수 있는 경우의 수 + n원에서 현재 동전 k원을 뺀 경우의 수
  for (let coin of coins) {
    for (let i = 1; i < m + 1; i++) {
      if (i - coin >= 0) {
        dp[i] += dp[i - coin];
      }
    }
  }
  console.log(dp[m]);
}